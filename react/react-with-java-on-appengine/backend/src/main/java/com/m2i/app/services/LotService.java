package com.m2i.app.services;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.googlecode.objectify.Key;
import com.m2i.app.adapters.context.RequestContext;
import com.m2i.app.common.AppHelper;
import com.m2i.app.common.ModelFields;
import com.m2i.app.models.Lot;
import com.m2i.app.models.User;

@Service
public class LotService
{
    @Resource
    private UserService    userService;

    @Resource
    private RequestContext context;

    public List<Lot> getAll(User user)
    {
        return ofy().load().type(Lot.class).filter(ModelFields.USER, user).list();
    }

    public List<Lot> getAll()
    {
        return ofy().load().type(Lot.class).list();
    }

    public Lot get(Long id)
    {
        return ofy().load().type(Lot.class).id(id).now();
    }

    private Key<Lot> save(Lot lot)
    {
        return ofy().save().entity(lot).now();
    }
    
    public void delete(Long id)
    {
        ofy().delete().type(Lot.class).id(id).now(); // synchronous
    }

    public Lot create(Lot lot)
    {
        lot.setDate(new Date());
        lot.setSpecieFromCode(getSpecieName(lot.getCode()));
        Key<Lot> key = save(lot);
        lot.setId(key.getId());
        return lot;
    }
    
    private String getSpecieName(String code){
        String specie = AppHelper.getSpeciesMap().get(code.substring(code.length() -2, code.length()));
        if(specie == null)
        specie = AppHelper.getSpeciesMap().get(code.substring(code.length() -3, code.length()).toUpperCase());
        if(specie == null)
            return "unknown-specie";
        return specie;
    }

    public Lot update(Lot lot)
    {
        lot.setSpecieFromCode(getSpecieName(lot.getCode()));
        Key<Lot> key = save(lot);
        lot.setId(key.getId());
        return lot;
    }

    

}
