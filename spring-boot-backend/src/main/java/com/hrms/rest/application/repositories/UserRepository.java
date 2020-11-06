package com.hrms.rest.application.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hrms.rest.application.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{
	User findByUsername(String username);
	Boolean existsByUsername(String username);
	Boolean existsByEmail(String email);
}
