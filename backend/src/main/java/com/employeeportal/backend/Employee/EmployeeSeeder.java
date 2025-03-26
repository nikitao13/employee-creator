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
                    new Employee(
                            "John",
                            "Michael",
                            "Doe",
                            "john.doe@example.com",
                            "0412345678",
                            "123 Example St",
                            "Permanent",
                            "2023-01-01",
                            "2024-01-01",
                            "fullTime",
                            40),
                    new Employee(
                            "Jane",
                            null,
                            "Smith",
                            "jane.smith@example.com",
                            "0412987654",
                            "456 Another Rd",
                            "Contract",
                            "2023-03-15",
                            "2023-09-15",
                            "partTime",
                            24),
                    new Employee(
                            "Robert",
                            "James",
                            "Brown",
                            "robert.brown@example.com",
                            "0412123456",
                            "789 Main St",
                            "Permanent",
                            "2023-06-01",
                            "2025-06-01",
                            "fullTime",
                            38),
                    new Employee(
                            "Emily",
                            "Anne",
                            "Davis",
                            "emily.davis@example.com",
                            "0412111222",
                            "12 Davis Ln",
                            "Contract",
                            "2023-02-28",
                            "2023-10-15",
                            "partTime",
                            20),
                    new Employee(
                            "Michael",
                            null,
                            "Wilson",
                            "michael.wilson@example.com",
                            "0412333444",
                            "400 Wilson Ave",
                            "Permanent",
                            "2023-05-10",
                            "2024-05-09",
                            "fullTime",
                            40));

            employeeRepository.saveAll(employees);
            System.out.println("Seeded employee data.");
        } else {
            System.out.println("Employee data already exists.");
        }
    }
}
