package com.m2i.app.test.common;

public class TestConstants
{
    private static final String LOCALHOST_ENDPOINTS_URL = "http://localhost:8080";
    private static final String APPENGINE_ENDPOINTS_URL = "https://video-poker-dev.appspot.com";
    //private static final String SERVER_HOST = LOCALHOST_ENDPOINTS_URL;
    private static final String SERVER_HOST             = APPENGINE_ENDPOINTS_URL;
    public static String        PUBLIC_ENDPOINTS_URL    = SERVER_HOST;
    public static String        API_ENDPOINTS_URL       = SERVER_HOST + "/api";
}
