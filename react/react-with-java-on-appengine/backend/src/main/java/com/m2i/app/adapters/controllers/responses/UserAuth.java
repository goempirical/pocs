package com.m2i.app.adapters.controllers.responses;

import com.m2i.app.common.ModelFields;

import io.jsonwebtoken.Claims;

public class UserAuth
{
    private Claims claims;

    public UserAuth(Claims claims)
    {
        this.claims = claims;
    }

    public String getId()
    {
        return claims.get(ModelFields.USER_ID).toString();
    }

    public Claims getClaims()
    {
        return claims;
    }
}
