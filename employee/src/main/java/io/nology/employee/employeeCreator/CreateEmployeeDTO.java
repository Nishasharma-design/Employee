package io.nology.employee.employeeCreator;


import java.time.LocalDate;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public class CreateEmployeeDTO {
    
    @NotBlank(message = "First name is required")
    private String firstName;

    private String middleName;

    @NotBlank(message = "Last name is required")
    private String lastName;


    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Mobile number is required")
    @Pattern(regexp = "^\\+61\\d{9}$", message = "Must be a valid Australian mobile number (e.g., +61412345678)")
    private String mobileNumber;

     @NotBlank(message = "Residential address is required")
    private String residentialAddress;

    @NotBlank(message = "Contract type is required")
    private String contractType;  // "Permanent" or "Contract"

    @NotBlank(message = "Start date is required")
    private LocalDate startDate;

    private LocalDate finishDate; // Only required for contract employees

    @NotBlank(message = "Employment type is required")
    private String fullTimeOrPartTime;  // "Full-time" or "Part-time"

    @NotNull(message = "Hours per week is required")
    @Min(value = 1, message = "Hours per week must be at least 1")
    @Max(value = 168, message = "Hours per week cannot exceed 168")
    private Integer hoursPerWeek;


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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


}
