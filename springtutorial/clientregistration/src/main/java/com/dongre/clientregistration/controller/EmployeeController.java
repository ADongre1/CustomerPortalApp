package com.dongre.clientregistration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.dongre.clientregistration.model.Employee;
import com.dongre.clientregistration.service.PeopleRepository;

import java.util.List;

@RestController
public class EmployeeController {
    @Autowired
    private PeopleRepository peopleRepo;


    @RequestMapping(value = "/add/employee", method = RequestMethod.GET)
    public Employee addEmployee(
            @RequestParam("firstName") String firstName, @RequestParam("secondName") String lastName) {
        return peopleRepo.insert(new Employee("mongo","test"));
    }

    @RequestMapping(value = "/employee", method = RequestMethod.GET)
    public List<Employee> removeEmployee(@RequestParam("lastName") String lastName) {
        List<Employee> employees = peopleRepo.findByLastName(lastName);
        return employees;
    }
}