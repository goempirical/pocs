package com.m2i.app.models;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class Lot
{
    @Id
    private Long   id;
    private Date   date;
    // LYYMMDD
    private String code;
    //this is a literal extracted from the lot code it is the last 2 digits.
    private String specie;  
    // Valid status are: quarantine, on_hold, released
    private String status;
    private long weight;
    private String assignedTo; //M2, Stauber
    private Date testResultEstimatedDate; //M2, Stauber
    private Date testResultReceivedDate; //M2, Stauber

    public void setId(Long id)
    {
        this.id = id;
    }

    public Long getId()
    {
        return id;
    }
    
    public void setCode(String code)
    {
        this.code = code;
    }
    
    public String getCode()
    {
        return code;
    }

    public void setSpecie(String specie)
    {
        this.specie = specie;
    }
    
    public void setSpecieFromCode(String specie)
    {
        this.specie = specie;
    }

    public String getSpecie()
    {
        return specie;
    }
    
    public void setDate(Date datePlaced)
    {
        this.date = datePlaced;
    }

    public Date getDate()
    {
        return date;
    }

    public void setStatus(String status)
    {
        this.status = status;
    }

    public String getStatus()
    {
        return status;
    }
    
    public void setWeight(long weight)
    {
        this.weight = weight;
    }
    
    public long getWeight()
    {
        return weight;
    }
    
    public void setAssignedTo(String assignedTo)
    {
        this.assignedTo = assignedTo;
    }
    
    public String getAssignedTo()
    {
        return assignedTo;
    }
    
    public void setTestResultEstimatedDate(Date testResultEstimatedDate)
    {
        this.testResultEstimatedDate = testResultEstimatedDate;
    }
    
    public Date getTestResultEstimatedDate()
    {
        return testResultEstimatedDate;
    }
    
    public void setTestResultReceivedDate(Date testResultReceivedDate)
    {
        this.testResultReceivedDate = testResultReceivedDate;
    }
    
    public Date getTestResultReceivedDate()
    {
        return testResultReceivedDate;
    }

}
