package com.employeeportal.backend.Employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import java.util.List;

@Component
public class EmployeeSeeder implements CommandLineRunner {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public void run(String... args) {
        if (employeeRepository.count() == 0) {
            List<Employee> employees = Arrays.asList(
                    new Employee("John", "Michael", "Doe", "john.doe@example.com"),
                    new Employee("Jane", null, "Smith", "jane.smith@example.com"),
                    new Employee("Robert", "James", "Brown", "robert.brown@example.com"),
                    new Employee("Emily", "Anne", "Davis", "emily.davis@example.com"),
                    new Employee("Michael", null, "Wilson", "michael.wilson@example.com"));

            employeeRepository.saveAll(employees);
            System.out.println("Seeded employee data.");
        } else {
            System.out.println("Employee data already exists.");
        }
    }
}
