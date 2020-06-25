package com.dongre.clientregistration.service;

import java.util.List;

import com.dongre.clientregistration.model.Employee;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PeopleRepository extends MongoRepository<Employee, String> {

  public Employee findByFirstName(String firstName);
  public List<Employee> findByLastName(String lastName);

}