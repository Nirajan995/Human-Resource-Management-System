package com.hrms.rest.application.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hrms.rest.application.models.ERole;
import com.hrms.rest.application.models.Role;

@Repository
public interface RoleRepository extends CrudRepository<Role, Integer>{
	Role findByName(ERole name);
}
