package com.dongre.customerportal.service;

import java.util.List;

import com.dongre.customerportal.model.Employee;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PeopleRepository extends MongoRepository<Employee, String> {

  public Employee findByFirstName(String firstName);
  public List<Employee> findByLastName(String lastName);

}