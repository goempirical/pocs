package com.m2i.app.services;

import java.util.List;

import javax.annotation.Resource;
import javax.ws.rs.core.Response;

import org.springframework.stereotype.Service;

import com.googlecode.objectify.ObjectifyService;
import com.m2i.app.adapters.context.RequestContext;
import com.m2i.app.adapters.controllers.params.PlayerCredentials;
import com.m2i.app.common.PasswordUtils;
import com.m2i.app.models.User;

@Service
public class UserService
{

    @Resource
    private AuthService    authService;

    @Resource
    private RequestContext context;

    public Response createAndLogin(PlayerCredentials userIdAndSecret) throws Exception
    {
        if (!exists(userIdAndSecret))
        {
            User user = create(userIdAndSecret);
            store(user);
        }

        return login(userIdAndSecret);
    }

    private boolean exists(PlayerCredentials userIdAndSecret)
    {
        User user = get(userIdAndSecret.id);
        return user != null && user.getSecret().equals(userIdAndSecret.secret);
    }

    public Response login(PlayerCredentials userIdAndSecret) throws Exception
    {
        User user = get(userIdAndSecret.id);
        return authService.auth(user, userIdAndSecret);
    }

    public void delete(User user)
    {
        ObjectifyService.ofy().delete().entity(user).now();
    }

    public User get(String id)
    {
        return ObjectifyService.ofy().load().type(User.class).id(id).now();
    }

    public List<User> getAll()
    {
        return ObjectifyService.ofy().load().type(User.class).list();
    }

    public void store(User user)
    {
        ObjectifyService.ofy().save().entity(user).now();
    }

    private User create(PlayerCredentials userIdAndSecret) throws Exception
    {
        User user = new User();
        user.setId(userIdAndSecret.id);
        String secret = PasswordUtils.getSaltedHash(userIdAndSecret.secret);
        user.setSecret(secret);

        return user;
    }
}
