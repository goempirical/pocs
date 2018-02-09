package com.m2i.app.test;

import java.util.ArrayList;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.m2i.app.adapters.controllers.params.HandResultAddParams;
import com.m2i.app.models.Lot;
import com.m2i.app.models.User;
import com.m2i.app.test.common.AbstractGameTests;
import com.m2i.app.test.common.PlayerAndToken;
import com.m2i.app.test.common.TestConstants;

public class UserTests extends AbstractGameTests
{
    public static final String PLAYER_HAND_RESULT_ADD  = TestConstants.API_ENDPOINTS_URL + "/user/hands/add";
    public static final String PLAYER_HAND_RESULT_LIST = TestConstants.API_ENDPOINTS_URL + "/user/hands";

    @SuppressWarnings("unchecked")
    /**
     * This test will test the following endpoints 
     * /user/create 
     * /user/login
     * /api/user/get 
     * /api/user/hands/add 
     * /api/user/hands
     */
    @Test
    public void addAndListHandResults()
    {
        PlayerAndToken client = getPlayerAndToken();
        ArrayList<Lot> handResultList = doPost(PLAYER_HAND_RESULT_LIST, client.authToken, null, ArrayList.class).getBody();
        int handResultsBefore = handResultList.size();
        HandResultAddParams addHandResultParam = getAddHandResultParams();
        User user = doPost(PLAYER_HAND_RESULT_ADD, client.authToken, addHandResultParam, User.class).getBody();
        handResultList = doPost(PLAYER_HAND_RESULT_LIST, client.authToken, null, ArrayList.class).getBody();
        Assert.assertEquals(handResultList.size(), handResultsBefore + 1);
    }

    private HandResultAddParams getAddHandResultParams()
    {
        HandResultAddParams addBetParams = new HandResultAddParams();
        addBetParams.bet = 3;
        addBetParams.win = 5;
        return addBetParams;
    }

}
