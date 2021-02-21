package com.hrms.rest.application.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.rest.application.models.Payroll;
import com.hrms.rest.application.repositories.PayrollRepository;

@Service
public class PayrollServices {
	
	@Autowired
	private PayrollRepository payrollRepository;
	
	public List<Payroll> getAllPayrolls() {
		return (List<Payroll>) payrollRepository.findAll();
	}
	
}
