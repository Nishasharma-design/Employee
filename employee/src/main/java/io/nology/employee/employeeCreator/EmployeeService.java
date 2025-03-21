package io.nology.employee.employeeCreator;


import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final ModelMapper modelMapper;
    
    public EmployeeService(EmployeeRepository employeeRepository, ModelMapper modelMapper) {
        this.employeeRepository = employeeRepository;
        this.modelMapper = modelMapper;
    }

    public EmployeeEntity createEmployee(CreateEmployeeDTO createEmployeeDTO) {
        EmployeeEntity employee = modelMapper.map(createEmployeeDTO, EmployeeEntity.class);
        return employeeRepository.save(employee);
    }

    public List<EmployeeEntity> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<EmployeeEntity> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    public EmployeeEntity updateEmployee(Long id, UpdateEmployeeDTO updateEmployeeDTO) {
        Optional<EmployeeEntity> optionalEmployee = employeeRepository.findById(id);
        if (optionalEmployee.isPresent()) {
            EmployeeEntity employee = optionalEmployee.get();
            modelMapper.map(updateEmployeeDTO, employee);
            return employeeRepository.save(employee);
        }
        else {
            throw new RuntimeException("Employee not found with id: " + id);
        }
    }


    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }


}
