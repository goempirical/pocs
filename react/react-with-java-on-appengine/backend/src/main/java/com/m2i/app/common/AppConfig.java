package com.m2i.app.common;

import com.google.appengine.api.utils.SystemProperty;
import com.google.apphosting.api.ApiProxy;

public class AppConfig
{
    public static final String  APP_SECRET                  = "dslkhfdsuifhaelrkjfalciuhbjsdknjlkfgsd";
    public static final boolean FORCE_PROD_CONFIG           = false;
    public static final String  APP_ID_DEV                  = "video-poker-dev";
    public static final String  APP_ID_PROD                 = "video-poker-prod";

    public static String        HOST_URL;
    private static final String HOST_URL_LOCALHOST          = "http://localhost:8080";
    private static final String HOST_URL_APPENGINE_DEV      = "https://video-poker-dev.appspot.com";
    private static final String HOST_URL_APPENGINE_PROD     = "https://video-poker-prod.appspot.com";
    private static final long   MILLIS_IN_AN_HOUR           = 60 * 60 * 1000;
    public static final long    AUTH_TOKEN_EXPIRATION_IN_MS = 24 * MILLIS_IN_AN_HOUR;

    static
    {
        if (isEnvironment(APP_ID_PROD))
        {
            useProdConfig();
        }
        else if (isEnvironment(APP_ID_DEV))
        {
            useDevConfig();
        }
        else
        {
            useDevConfig();
        }

        if (isLocalEnvironment())
        {
            System.out.println("Running local environment.");
            if (FORCE_PROD_CONFIG)
            {
                useProdConfig();
            }
            HOST_URL = HOST_URL_LOCALHOST;
        }
    }

    private static void useProdConfig()
    {
        System.out.println("Using prod config.");
        HOST_URL = HOST_URL_APPENGINE_PROD;
    }

    private static void useDevConfig()
    {
        System.out.println("Using dev config.");
        HOST_URL = HOST_URL_APPENGINE_DEV;
    }

    public static boolean isLocalEnvironment()
    {
        return SystemProperty.environment.value().equals(SystemProperty.Environment.Value.Development);
    }

    public static boolean isEnvironment(String appId)
    {
        return ApiProxy.getCurrentEnvironment().getAppId().toLowerCase().endsWith(appId);
    }

}