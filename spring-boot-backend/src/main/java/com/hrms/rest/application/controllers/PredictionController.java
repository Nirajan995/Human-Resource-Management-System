package com.hrms.rest.application.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.rest.application.services.PredictionService;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
@RequestMapping("/prediction")
public class PredictionController {
	
	@Autowired
	private PredictionService predictionService;
	
	@GetMapping("/employees")
	public String performancePrediction() {
		return predictionService.predict().toJSONString();
	}
}
