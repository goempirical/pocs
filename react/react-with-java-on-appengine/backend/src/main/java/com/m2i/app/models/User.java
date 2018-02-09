package com.m2i.app.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
public class User
{
    @Id
    private String    id;
    private String    secret;

    public void setId(String id)
    {
        this.id = id;
    }

    public String getId()
    {
        return id;
    }

    public void setSecret(String secret)
    {
        this.secret = secret;
    }

    // we do not want this field to be sent to the client
    @JsonIgnore
    public String getSecret()
    {
        return secret;
    }

}
