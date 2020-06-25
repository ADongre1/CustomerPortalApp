package com.dongre.clientregistration.model;

import org.springframework.data.annotation.Id;

public class Employee {
    @Id
    private String Id;
    private String firstName;
    private String lastName;

    // default constructor
    public Employee(String fName, String lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    public String getEmpId() {
        return Id;
    }

    public void setEmpId(String empId) {
        this.Id = empId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return this.lastName;
    }

    public void setSecondName(String secondName) {
        this.lastName = secondName;
    }
}