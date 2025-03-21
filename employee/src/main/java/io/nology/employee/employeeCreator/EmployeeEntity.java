package io.nology.employee.employeeCreator;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "employees")
public class EmployeeEntity {
   
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)    
private Long id;

@Column(nullable = false)
private String firstName;

@Column
private String middleName;

@Column
private String lastName;

@Column
private String email;

@Column
private String mobileNumber;

@Column
private String residentialAddress;

@Column
private String contractType;

@Column
private LocalDate startDate;

@Column
private LocalDate finishDate;

@Column
private String fullTimeOrPartTime;

@Column
private Integer hoursPerWeek;



// default constructor 
//Spring Boot (which uses Hibernate ORM) requires a default constructor when creating entity objects from the database
public EmployeeEntity() {}

// parametrized constructor
public EmployeeEntity(String firstName, String middleName, String lastName, String email, String mobileNumber, String residentialAddress, String contractType, LocalDate startDate, LocalDate finishDate, String fullTimeOrPartTime, Integer hoursPerWeek) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.email = email;
    this.mobileNumber = mobileNumber;
    this.residentialAddress = residentialAddress;
    this.contractType = contractType;
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.fullTimeOrPartTime = fullTimeOrPartTime;
    this.hoursPerWeek = hoursPerWeek;
}

public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public String getFirstName() {
    return firstName;
}

public void setFirstName(String firstName) {
    this.firstName = firstName;
}

public String getMobileNumber() {
    return mobileNumber;
}

public void setMobileNumber(String mobileNumber) {
    this.mobileNumber = mobileNumber;
}

public String getResidentialAddress() {
    return residentialAddress;
}

public void setResidentialAddress(String residentialAddress) {
    this.residentialAddress = residentialAddress;
}

public String getContractType() {
    return contractType;
}

public void setContractType(String contractType) {
    this.contractType = contractType;
}

public LocalDate getStartDate() {
    return startDate;
}

public void setStartDate(LocalDate startDate) {
    this.startDate = startDate;
}

public LocalDate getFinishDate() {
    return finishDate;
}

public void setFinishDate(LocalDate finishDate) {
    this.finishDate = finishDate;
}

public String getFullTimeOrPartTime() {
    return fullTimeOrPartTime;
}

public void setFullTimeOrPartTime(String fullTimeOrPartTime) {
    this.fullTimeOrPartTime = fullTimeOrPartTime;
}

public Integer getHoursPerWeek() {
    return hoursPerWeek;
}

public void setHoursPerWeek(Integer hoursPerWeek) {
    this.hoursPerWeek = hoursPerWeek;
}

public String getLastName() {
    return lastName;
}

public void setLastName(String lastName) {
    this.lastName = lastName;
}

public String getEmail() {
    return email;
}

public void setEmail(String email) {
    this.email = email;
}

 }






/*
 * why we need parametrized constructor
 * 
 * because if we dont use Parametrized constructor, 
 * for example:-  EmployeeEntity emp = new EmployeeEntity();
                  emp.setFirstName("John");
                  emp.setLastName("Doe");
                  emp.setEmail("john.doe@example.com");

 * 
 * whereas if we use constructor 
 *   we can do the same thing in the below way:-
 *        
 *      EmployeeEntity emp = new EmployeeEntity("John", "Doe", "john.doe@example.com", "Engineering", LocalDate.now());

 * 
 */
