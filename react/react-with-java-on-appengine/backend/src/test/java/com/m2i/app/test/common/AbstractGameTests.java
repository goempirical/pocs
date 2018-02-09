package com.m2i.app.test.common;

import java.util.Date;
import java.util.UUID;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.springframework.web.client.RestTemplate;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.m2i.app.adapters.controllers.params.PlayerCredentials;
import com.m2i.app.adapters.controllers.responses.AuthToken;
import com.m2i.app.models.User;

@ContextConfiguration(locations = {"classpath:tests-config.xml"})
public abstract class AbstractGameTests extends AbstractTestNGSpringContextTests
{
    public ObjectMapper        mapper        = new ObjectMapper();
    public RestTemplate        rest          = new RestTemplate();
    public static final String PLAYER_CREATE = TestConstants.PUBLIC_ENDPOINTS_URL + "/user/create";
    public static final String PLAYER_LOGIN  = TestConstants.PUBLIC_ENDPOINTS_URL + "/user/login";
    public static final String PLAYER_GET    = TestConstants.API_ENDPOINTS_URL + "/user/get";

    @BeforeSuite(alwaysRun = true)
    public void beforeSuite()
    {
        // System.out.println("Running before suite");
    }

    @AfterSuite(alwaysRun = true)
    public void afterSuite()
    {
        // System.out.println("Running after suite");
    }

    @BeforeMethod
    public void beforeMethod()
    {
        // System.out.println("Running before method");
    }

    @AfterMethod
    public void afterTest()
    {
        // System.out.println("Running after method");
    }

    public HttpEntity<String> buildEntity(String token, Object obj)
    {
        HttpHeaders headers = new HttpHeaders();
        headers.set(HttpHeaders.AUTHORIZATION, "Bearer " + token);
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> entity = new HttpEntity<String>(convertToJson(obj), headers);
        return entity;
    }

    public String convertToJson(Object obj)
    {
        if (obj == null)
        {
            return "";
        }
        try
        {
            return mapper.writeValueAsString(obj);
        }
        catch (JsonProcessingException e)
        {
            e.printStackTrace();
        }
        return "";
    }

    public <T> ResponseEntity<T> doPost(String endpoint, String token, Object params, Class<T> responseKlass)
    {
        ResponseEntity<T> response = rest.postForEntity(endpoint, buildEntity(token, params), responseKlass);
        Assert.assertTrue(response.getStatusCode().equals(HttpStatus.OK));
        return response;
    }

    public PlayerAndToken getPlayerAndToken()
    {
        PlayerCredentials credentials = initCredentials();
        create(credentials);
        String token = login(credentials);
        PlayerAndToken userAndToken = new PlayerAndToken();
        userAndToken.user = get(token);
        userAndToken.authToken = token;
        return userAndToken;
    }

    private PlayerCredentials initCredentials()
    {
        PlayerCredentials credentials = new PlayerCredentials();
        credentials.id = "user-" + UUID.randomUUID();
        credentials.secret = "secret-" + UUID.randomUUID();
        return credentials;
    }

    private void create(PlayerCredentials crendentials)
    {
        AuthToken authTokenObj = doPost(PLAYER_CREATE, null, crendentials, AuthToken.class).getBody();
        String authToken = authTokenObj.getToken();
        Assert.assertNotNull(authToken);
    }

    private String login(PlayerCredentials crendentials)
    {
        AuthToken authTokenObj = doPost(PLAYER_LOGIN, null, crendentials, AuthToken.class).getBody();
        String authToken = authTokenObj.getToken();
        Assert.assertNotNull(authToken);
        return authToken;
    }

    private User get(String token)
    {
        User user = doPost(PLAYER_GET, token, null, User.class).getBody();
        Assert.assertNull(user.getSecret());
        return user;
    }

}
