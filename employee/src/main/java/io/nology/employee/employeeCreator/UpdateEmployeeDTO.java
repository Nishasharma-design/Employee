package io.nology.employee.employeeCreator;

import java.time.LocalDate;


import jakarta.validation.constraints.NotNull;

public class UpdateEmployeeDTO {
    
      @NotNull(message = "Employee ID is required")
    private Long id;

    private String firstName;
    private String middleName;
    private String lastName;
    private String email;
    private String mobileNumber;
    private String residentialAddress;
    private String contractType;
    private LocalDate startDate;
    private LocalDate finishDate;
    private String fullTimeOrPartTime;
    private Integer hoursPerWeek;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
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
