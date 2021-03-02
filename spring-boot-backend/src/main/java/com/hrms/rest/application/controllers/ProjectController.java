package com.hrms.rest.application.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.rest.application.models.Projects;
import com.hrms.rest.application.services.ProjectService;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
@RequestMapping("/api/v3")
public class ProjectController {
	
	@Autowired
	private ProjectService projectService;
	
	@GetMapping("/projects")
	public List<Projects> getProjects(){
		return projectService.getAllProjects();
	
}
}
