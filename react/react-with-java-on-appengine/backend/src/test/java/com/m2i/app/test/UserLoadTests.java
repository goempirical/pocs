package com.m2i.app.test;

import org.testng.annotations.Test;

public class UserLoadTests
{

    @Test
    public void doLoadTest() throws InterruptedException
    {
        for (int i = 0; i < 500; i++)
        {
            Thread.sleep(1000);
            new Execute().start();
        }
    }

    public class Execute extends Thread
    {
        @Override
        public void run()
        {
            UserTests userTest = new UserTests();
            userTest.addAndListHandResults();
        }
    }

}
