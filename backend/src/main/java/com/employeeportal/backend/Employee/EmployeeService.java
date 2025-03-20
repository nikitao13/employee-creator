package com.employeeportal.backend.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
  @Autowired
  private EmployeeRepository employeeRepository;

  public List<Employee> getAllEmployees() {
    return employeeRepository.findAll();
  }

  public Employee createEmployee(Employee employee) {
    return employeeRepository.save(employee);
  }

  public Employee updateEmployee(Long id, Employee updatedEmployee) {
    Optional<Employee> optionalEmployee = employeeRepository.findById(id);

    if (optionalEmployee.isPresent()) {
        Employee existingEmployee = optionalEmployee.get();

        existingEmployee.setFirstName(updatedEmployee.getFirstName());
        existingEmployee.setMiddleName(updatedEmployee.getMiddleName());
        existingEmployee.setLastName(updatedEmployee.getLastName());
        existingEmployee.setEmail(updatedEmployee.getEmail());

        return employeeRepository.save(existingEmployee);
    } else {
        throw new RuntimeException("Employee not found with id: " + id);
    }
  }
}
