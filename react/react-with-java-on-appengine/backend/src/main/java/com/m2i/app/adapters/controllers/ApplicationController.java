package com.m2i.app.adapters.controllers;

import java.net.URI;
import java.net.URISyntaxException;

import javax.ws.rs.core.Response;

public class ApplicationController
{
    public Response redirect(String url)
    {
        try
        {
            return Response.seeOther(new URI(url)).build();
        }
        catch (URISyntaxException e)
        {
            e.printStackTrace();
        }
        return Response.ok().build();
    }
}
