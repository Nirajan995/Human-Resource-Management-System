package com.hrms.rest.application.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.rest.application.exception.ResourceNotFoundException;
import com.hrms.rest.application.models.Employees;
import com.hrms.rest.application.repositories.EmployeesRepository;

@Service
public class EmployeeServices {
	
	@Autowired
	private EmployeesRepository repository;
	
	public List<Employees> getAllEmployees(){
		 return (List<Employees>) repository.findAll();
	}
	
	public Employees getEmployeesById(long id){
		 return repository.findById(id).
				 orElseThrow(()-> new ResourceNotFoundException("User not found with id: " + id));
	}
	
	public void deleteEmployee(long id) {
		repository.deleteById(id);
	}
	
	public void saveEmployee(Employees employees1) {
		repository.save(employees1);
		
	}

	public void updateEmployeesById(long id, Employees employees) {
		Employees employees2=repository.findById(id).get(); 
		employees2.setAddress(employees.getAddress());
		employees2.setAge(employees.getAge());
		employees2.setEmail(employees.getEmail());
		employees2.setFirstName(employees.getFirstName());
		employees2.setLastName(employees.getLastName());
		employees2.setHireDate(employees.getHireDate());
		employees2.setPhone_no(employees.getPhone_no());
		employees2.setId(employees.getId());
		repository.save(employees2);
	}  
	
}
