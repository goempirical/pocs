package com.m2i.app.adapters.filters;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;

import java.io.IOException;
import java.util.Arrays;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.HttpHeaders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.filter.GenericFilterBean;

import com.thetransactioncompany.cors.CORSRequestType;
import com.m2i.app.adapters.context.RequestContext;
import com.m2i.app.adapters.controllers.responses.UserAuth;
import com.m2i.app.common.AppConfig;

public class AuthFilter extends GenericFilterBean
{
    private static final String BEARER_STR = "Bearer ";

    private static final class ErrorMessages
    {
        private static final String MISSING_OR_INVALD_AUTH_HEADER = "Missing or invalid authorization header.";
        private static final String INVALID_TOKEN                 = "Invalid token.";
        public static final String  CONTEXT_MISSING               = "context is missing";
        public static final String  TOKEN_HAS_EXPIRED             = "Invalid token. The token has expired";
    }

    private static final String[] PUBLIC_ENDPOINTS = new String[]{"/api/users", "/api/users/login"};

    @Autowired
    private RequestContext        context;

    @Override
    public void doFilter(final ServletRequest req, final ServletResponse res, final FilterChain chain) throws IOException, ServletException
    {
        // If it is a preflight just return
        CORSRequestType type = CORSRequestType.detect((HttpServletRequest) req);
        if (type.equals(CORSRequestType.PREFLIGHT))
        {
            chain.doFilter(req, res);
            return;
        }

        // check if its public
        String path = ((HttpServletRequest) req).getRequestURI();
        if (Arrays.asList(PUBLIC_ENDPOINTS).contains(path))
        {
            chain.doFilter(req, res);
            return;
        }

        if (context == null)
        {
            throw new ServletException(ErrorMessages.CONTEXT_MISSING);
        }

        final HttpServletRequest request = (HttpServletRequest) req;
        final HttpServletResponse response = (HttpServletResponse) res;

        final String authHeader = getAuthHeaderOrException(request);

        // The part after "Bearer "
        final String token = authHeader.substring(7);

        try
        {

            final Claims claims = Jwts.parser().setSigningKey(AppConfig.APP_SECRET).parseClaimsJws(token).getBody();
            // set the user auth info into the request context
            UserAuth userAuth = new UserAuth(claims);
            //logger.info("Player Id: " + userAuth.getId());
            context.getStorage().put(RequestContext.USER_AUTH_INFO, userAuth );
        }
        catch (final SignatureException e)
        {
            throw new ServletException(ErrorMessages.INVALID_TOKEN);
        }
        catch (final ExpiredJwtException e)
        {
            // if token has expired we will explicitly set the status to 401 as
            // suggested by jwt experts. Option to custom auth is Auth0.
            // this can be a good attempt at making it easier to integrate
            // multiple methods quickly
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, ErrorMessages.TOKEN_HAS_EXPIRED);
            return;
        }

        chain.doFilter(req, res);
    }

    private String getAuthHeaderOrException(final HttpServletRequest request) throws ServletException
    {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        // logger.fatal("This is the token from rey:" + authHeader);
        if (authHeader == null || !authHeader.startsWith(BEARER_STR))
        {
            throw new ServletException(ErrorMessages.MISSING_OR_INVALD_AUTH_HEADER);
        }
        return authHeader;
    }

}
