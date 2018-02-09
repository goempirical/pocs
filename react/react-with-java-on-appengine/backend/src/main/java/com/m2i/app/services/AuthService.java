package com.m2i.app.services;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

import javax.ws.rs.core.Response;

import org.springframework.stereotype.Service;

import com.m2i.app.adapters.controllers.params.PlayerCredentials;
import com.m2i.app.adapters.controllers.responses.AuthToken;
import com.m2i.app.common.AppConfig;
import com.m2i.app.common.ModelFields;
import com.m2i.app.common.PasswordUtils;
import com.m2i.app.models.User;

@Service
public class AuthService
{

    public Response auth(User user, PlayerCredentials userIdAndSecret) throws Exception
    {
        if (user != null && PasswordUtils.check(userIdAndSecret.secret, user.getSecret()))
        {
            Date expiration = new Date(System.currentTimeMillis() + AppConfig.AUTH_TOKEN_EXPIRATION_IN_MS);

            //Date expiration = new Date(System.currentTimeMillis() + 10000);

            String token = Jwts.builder()
                            .setSubject(user.getId())
                            .claim(ModelFields.USER_ID, user.getId())
                            .setIssuedAt(new Date())
                            .signWith(SignatureAlgorithm.HS256, AppConfig.APP_SECRET)
                            .setExpiration(expiration)
                            .compact();

            AuthToken authToken = new AuthToken();
            authToken.setToken(token);
            return Response.ok(authToken).build();
        }
        else
        {
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }

    }
}