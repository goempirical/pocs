
package com.m2i.app.adapters.controllers;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.m2i.app.adapters.context.RequestContext;
import com.m2i.app.adapters.controllers.params.PlayerCredentials;
import com.m2i.app.models.User;
import com.m2i.app.services.UserService;

@Controller
@Path("/api/users")
public class UserController extends ApplicationController
{

    @Autowired
    private UserService           userService;

    @Autowired
    private RequestContext          context;  
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("")
    public Response create(PlayerCredentials userIdAndSecret) throws Exception
    {
        if(userIdAndSecret == null)
            return Response.notAcceptable(null).build();
        return userService.createAndLogin(userIdAndSecret);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/login")
    public Response login(PlayerCredentials userIdAndSecret) throws Exception
    {
        if(userIdAndSecret == null)
            return Response.notAcceptable(null).build();
        return userService.login(userIdAndSecret);
    }

    @GET
//    @Consumes(MediaType.APPLICATION_JSON)
    @Produces("application/hal+json") 
    @Path("")
    public Response get()
    {
        //User user = userService.get(context.getUserId());
        return Response.ok(userService.getAll()).build();
    }

}