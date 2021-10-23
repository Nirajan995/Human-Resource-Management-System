package com.hrms.rest.application.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hrms.rest.application.models.Payroll;

@Repository
public interface PayrollRepository extends CrudRepository<Payroll, Integer>{
	
}
