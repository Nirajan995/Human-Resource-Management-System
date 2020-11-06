package com.hrms.rest.application.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hrms.rest.application.models.Employees;

@Repository
public interface EmployeesRepository extends CrudRepository<Employees, Long>{
	
}
