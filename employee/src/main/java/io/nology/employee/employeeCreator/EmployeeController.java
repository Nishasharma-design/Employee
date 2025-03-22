package io.nology.employee.employeeCreator;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping
    public ResponseEntity<EmployeeEntity> createEmployee(@Valid @RequestBody CreateEmployeeDTO createEmployeeDTO) {
       EmployeeEntity savedEmployee = employeeService.createEmployee(createEmployeeDTO);
       return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeEntity>> getAllEmployees() {
        List<EmployeeEntity> employees = employeeService.getAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);

    }

    @PutMapping("/{id}")
    public ResponseEntity<EmployeeEntity> updateEmployee(@PathVariable Long id, @Valid @RequestBody UpdateEmployeeDTO updateEmployeeDTO) {

         EmployeeEntity updatedEmployee = employeeService.updateEmployee(id, updateEmployeeDTO);

         if (updatedEmployee != null) {
            return ResponseEntity.ok(updatedEmployee);
         }
         return ResponseEntity.notFound().build();

    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeEntity> getEmployeeById(@PathVariable Long id) {
        Optional<EmployeeEntity> employee = employeeService.getEmployeeById(id);
        return employee.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
