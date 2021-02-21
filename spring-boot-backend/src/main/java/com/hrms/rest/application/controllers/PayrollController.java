package com.hrms.rest.application.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.rest.application.models.Payroll;
import com.hrms.rest.application.services.PayrollServices;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
@RequestMapping("/api/v2")
public class PayrollController {
	
	@Autowired
	private PayrollServices services;
	
	@GetMapping("/payrolls")
	public List<Payroll> getPayrolls(){
		return services.getAllPayrolls();
	}
}
