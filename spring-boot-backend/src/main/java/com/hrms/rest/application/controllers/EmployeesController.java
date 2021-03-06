package com.hrms.rest.application.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.rest.application.models.Employees;
import com.hrms.rest.application.services.EmployeeServices;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
@RequestMapping("/api/v1")
public class EmployeesController {
	
	@Autowired
	private EmployeeServices services;
	
	@GetMapping("/employees")
	public List<Employees> getEmployees() {
		return services.getAllEmployees();
	} 
	
	@GetMapping("/employees/{id}")
	public Employees getEmployeesById(@PathVariable long id) {
		return services.getEmployeesById(id);
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Void> deleteEmployees(@PathVariable long id){
		services.deleteEmployee(id);
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping("/employees")
	public ResponseEntity<HttpStatus> postEmployees(@RequestBody Employees employees1){
		services.saveEmployee(employees1);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Void> updateEmployees(@PathVariable long id, @RequestBody Employees employees){
		if(employees!=null) {
			services.updateEmployeesById(id,employees);
			return new ResponseEntity<>(HttpStatus.OK);		
		}
		else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
	
}
