package com.hrms.rest.application.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.rest.application.models.Projects;
import com.hrms.rest.application.repositories.ProjectRepository;

@Service
public class ProjectService {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	public List<Projects> getAllProjects() {
		return (List<Projects>) projectRepository.findAll();
	}
}
