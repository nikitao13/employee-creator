package com.employeeportal.backend.Employee;

import jakarta.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "first_name", nullable = false)
  private String firstName;

  @Column(name = "middle_name", nullable = true)
  private String middleName;

  @Column(name = "last_name", nullable = false)
  private String lastName;

  @Column(name = "email", nullable = false, unique = true)
  private String email;

  @Column(name = "phone", nullable = false, unique = true)
  private String phone;

  @Column(name = "address", nullable = false)
  private String address;

  @Column(name = "contractType", nullable = false)
  private String contractType;

  @Column(name = "startDate", nullable = false)
  private String startDate;

  @Column(name = "finishDate", nullable = true)
  private String finishDate;

  @Column(name = "ongoing", nullable = true)
  private Boolean ongoing;

  @Column(name = "timeBasis", nullable = false)
  private String timeBasis;

  @Column(name = "hours", nullable = false)
  private Integer hours;

  public Employee() {
  }

  public Employee(String firstName, String middleName, String lastName, String email, String phone, String address,
      String contractType, String startDate, String finishDate, Boolean ongoing, String timeBasis, Integer hours) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.contractType = contractType;
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.ongoing = ongoing;
    this.timeBasis = timeBasis;
    this.hours = hours;
  }

  public Employee(String firstName, String lastName, String email, String phone, String address, String contractType,
      String startDate, String finishDate, Boolean ongoing, String timeBasis, Integer hours) {
    this.firstName = firstName;
    this.middleName = null;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.contractType = contractType;
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.ongoing = ongoing;
    this.timeBasis = timeBasis;
    this.hours = hours;
  }

  public Long getId() {
    return id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getMiddleName() {
    return middleName;
  }

  public void setMiddleName(String middleName) {
    this.middleName = middleName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getFullName() {
    return (middleName == null || middleName.isBlank())
        ? firstName + " " + lastName
        : firstName + " " + middleName + " " + lastName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getContractType() {
    return contractType;
  }

  public void setContractType(String contractType) {
    this.contractType = contractType;
  }

  public String getStartDate() {
    return startDate;
  }

  public void setStartDate(String startDate) {
    this.startDate = startDate;
  }

  public String getFinishDate() {
    return finishDate;
  }

  public void setFinishDate(String finishDate) {
    this.finishDate = finishDate;
  }

  public Boolean getOngoing() {
    return ongoing;
  }

  public void setOngoing(Boolean ongoing) {
    this.ongoing = ongoing;
  }

  public String getTimeBasis() {
    return timeBasis;
  }

  public void setTimeBasis(String timeBasis) {
    this.timeBasis = timeBasis;
  }

  public Integer getHours() {
    return hours;
  }

  public void setHours(Integer hours) {
    this.hours = hours;
  }
}
