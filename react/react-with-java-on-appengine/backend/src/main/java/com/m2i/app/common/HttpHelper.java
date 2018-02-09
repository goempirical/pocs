package com.m2i.app.common;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

import com.google.appengine.api.urlfetch.HTTPMethod;

public class HttpHelper
{

    public static HttpURLConnection doPost(String urlString, String params) throws MalformedURLException, IOException, ProtocolException
    {
        URL url = new URL(urlString);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setDoOutput(true);
        connection.setDoInput(true);
        connection.setRequestMethod(HTTPMethod.POST.name());
        DataOutputStream writer = new DataOutputStream(connection.getOutputStream());
        writer.writeBytes(params);
        writer.flush();
        writer.close();
        return connection;
    }

    public static String getResponse(HttpURLConnection connection) throws IOException
    {
        BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        StringBuilder response = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null)
        {
            response.append(line);
        }
        reader.close();
        return response.toString();
    }

}
