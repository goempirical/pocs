package com.m2i.app.adapters.context;

import java.util.Map;

import com.m2i.app.adapters.controllers.responses.UserAuth;

public interface RequestContext
{
    public static final String USER_AUTH_INFO = "user_auth_info";

    public Map<String, Object> getStorage();

    public String getUserId();

    public UserAuth getUserAuthInfo();

}
