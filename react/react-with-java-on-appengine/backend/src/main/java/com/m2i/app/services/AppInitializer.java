package com.m2i.app.services;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import com.googlecode.objectify.ObjectifyService;
import com.m2i.app.models.Lot;
import com.m2i.app.models.User;

@Service
public class AppInitializer
{

    @PostConstruct
    public void init()
    {
        registerWithObjectify();
    }

    private void registerWithObjectify()
    {
        ObjectifyService.register(User.class);
        ObjectifyService.register(Lot.class);
        
    }
}