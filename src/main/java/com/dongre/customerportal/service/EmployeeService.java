package com.dongre.customerportal.service;

import org.springframework.stereotype.Service;
import com.dongre.customerportal.model.Employee;

@Service
public class EmployeeService {
    public Employee createEmployee(String empId, String fname, String sname) {
        Employee emp = new Employee("jane","goodall");

        return emp;
    }

    public void deleteEmployee(String empId) {
    }
}