package com.m2i.app.adapters.context;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

import com.m2i.app.adapters.controllers.responses.UserAuth;

/**
 * This is the actual component that we want to have request scoped
 * 
 * This is what makes it happen but we need to autowire the interface
 *
 */
@Component
@Scope(value = "request", proxyMode = ScopedProxyMode.INTERFACES)
public class DefaultRequestContext implements RequestContext
{
    private Map<String, Object> storage = new HashMap<String, Object>();

    @Override
    public Map<String, Object> getStorage()
    {
        return storage;
    }

    @Override
    public String getUserId()
    {
        return getUserAuthInfo().getId();
    }

    @Override
    public UserAuth getUserAuthInfo()
    {
        return (UserAuth) getStorage().get(USER_AUTH_INFO);
    }
}
