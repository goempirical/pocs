package com.m2i.app.common;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;

public class AppHelper
{
    private static Map<String, String> speciesMap;

    private static ObjectMapper mapper;

    public static ObjectMapper getMapper()
    {
        if (mapper == null)
        {
            mapper = new ObjectMapper();
        }
        return mapper;
    }
    
    
    public static Map<String, String> getSpeciesMap(){
        if(speciesMap == null){
            speciesMap = new HashMap<>();
            speciesMap.put("01", "Royal Sun Aga...");
            speciesMap.put("02", "Ling Zhi");
            speciesMap.put("03", "Yun Zhi");
            speciesMap.put("04", "Dong Cao");
            speciesMap.put("05", "Niu Chang Chih");
            speciesMap.put("06", "Beech, Buna shimeji");
            speciesMap.put("07", "Maitake");
            speciesMap.put("08", "King Trumpet, Eryngii ");
            speciesMap.put("09", "Chaga");
            speciesMap.put("10", "Lion's Mane, Yambushitake");
            speciesMap.put("11", "Shiitake");
            speciesMap.put("12", "Cordyceps (source AM) ");
            speciesMap.put("13", "Cordyceps (source AM) ");
            speciesMap.put("01C", "Royal Sun Aga...");
            speciesMap.put("02C", "Ling Zhi");
            speciesMap.put("03C", "Yun Zhi");
            speciesMap.put("04C", "Dong Cao");
            speciesMap.put("05C", "Niu Chang Chih");
            speciesMap.put("06C", "Beech, Buna shimeji");
            speciesMap.put("07C", "Maitake");
            speciesMap.put("08C", "King Trumpet, Eryngii ");
            speciesMap.put("09C", "Chaga");
            speciesMap.put("10C", "Lion's Mane, Yambushitake");
            speciesMap.put("11C", "Shiitake");
            speciesMap.put("12C", "Cordyceps (source AM) ");
            speciesMap.put("13C", "Cordyceps (source AM) ");
        }
        return speciesMap;
    }
}
