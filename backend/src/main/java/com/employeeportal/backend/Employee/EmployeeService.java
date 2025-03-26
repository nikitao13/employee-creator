package com.employeeportal.backend.Employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employeeportal.backend.exception.EmployeeNotFoundException;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

  @Autowired
  private EmployeeRepository employeeRepository;

  public List<Employee> getAllEmployees() {
    return employeeRepository.findAll();
  }

  public Employee getEmployeeById(Long id) {
    return employeeRepository.findById(id)
        .orElseThrow(() -> new EmployeeNotFoundException("Employee not found with id: " + id));
  }

  public Employee createEmployee(Employee employee) {
    employee.setFirstName(formatName(employee.getFirstName()));
    if (employee.getMiddleName() != null && !employee.getMiddleName().isBlank()) {
      employee.setMiddleName(formatName(employee.getMiddleName()));
    } else {
      employee.setMiddleName(null);
    }
    employee.setLastName(formatName(employee.getLastName()));

    if (employee.getPhone() != null) {
      employee.setPhone(employee.getPhone().replaceAll("\\s+", ""));
    }

    return employeeRepository.save(employee);
  }

  public Employee updateEmployee(Long id, Employee updatedEmployee) {
    Optional<Employee> optionalEmployee = employeeRepository.findById(id);

    if (optionalEmployee.isPresent()) {
      Employee existingEmployee = optionalEmployee.get();

      existingEmployee.setFirstName(formatName(updatedEmployee.getFirstName()));

      if (updatedEmployee.getMiddleName() != null && !updatedEmployee.getMiddleName().isBlank()) {
        existingEmployee.setMiddleName(formatName(updatedEmployee.getMiddleName()));
      } else {
        existingEmployee.setMiddleName(null);
      }

      existingEmployee.setLastName(formatName(updatedEmployee.getLastName()));
      existingEmployee.setEmail(updatedEmployee.getEmail());

      if (updatedEmployee.getPhone() != null) {
        existingEmployee.setPhone(updatedEmployee.getPhone().replaceAll("\\s+", ""));
      }

      existingEmployee.setAddress(updatedEmployee.getAddress());
      existingEmployee.setContractType(updatedEmployee.getContractType());
      existingEmployee.setStartDate(updatedEmployee.getStartDate());
      existingEmployee.setFinishDate(updatedEmployee.getFinishDate());
      existingEmployee.setOngoing(updatedEmployee.getOngoing());
      existingEmployee.setTimeBasis(updatedEmployee.getTimeBasis());
      existingEmployee.setHours(updatedEmployee.getHours());

      return employeeRepository.save(existingEmployee);
    } else {
      throw new RuntimeException("Employee not found with id: " + id);
    }
  }

  public void deleteEmployee(Long id) {
    if (!employeeRepository.existsById(id)) {
      throw new EmployeeNotFoundException("Employee not found with id: " + id);
    }
    employeeRepository.deleteById(id);
  }

  private String formatName(String name) {
    if (name == null || name.trim().isEmpty()) {
      return name;
    }
    name = name.trim();
    return name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
  }
}
