package com.m2i.app.adapters.controllers;

import javax.annotation.Resource;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.stereotype.Controller;

import com.m2i.app.adapters.context.RequestContext;
import com.m2i.app.models.Lot;
import com.m2i.app.models.User;
import com.m2i.app.services.LotService;
import com.m2i.app.services.UserService;

@Controller
@Path("/api/lots")
public class LotController
{
    @Resource
    private UserService    userService;

    @Resource
    private LotService     lotService;

    @Resource
    private RequestContext context;

    @GET
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("")
    public Response list()
    {
        // todo get all the hands for this user
        User user = userService.get(context.getUserId());
        // return Response.ok(lotService.getAll(user)).build();
        return Response.ok(lotService.getAll()).build();
    }

    @GET
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public Response show(@PathParam("id") String id)
    {
        User user = userService.get(context.getUserId());
        return Response.ok(lotService.get(Long.getLong(id))).build();
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("")
    public Response create(Lot lot)
    {
        return Response.ok(lotService.create(lot)).build();
    }
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public Response update(Lot lot, @PathParam("id") String id)
    {
        return Response.ok(lotService.update(lot)).build();
    }
    
    @DELETE
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public Response delete(@PathParam("id") String id)
    {
        lotService.delete(Long.valueOf(id));
        return Response.ok().build();
    }

}
