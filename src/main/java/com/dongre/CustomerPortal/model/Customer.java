package com.dongre.customerportal.model;

import java.util.Date;


public class Customer {
    private long Id;
    private Date DOB;
    private String FirstName;
    private String LastName;
    private boolean Pets;
    private  int Individuals;
    private Home[] Homes;
    private HomePolicy[] HomePolicies;
    private AutoPolicy[] AutoPolicies;
    private Vehicle[] vehicles;
    
}