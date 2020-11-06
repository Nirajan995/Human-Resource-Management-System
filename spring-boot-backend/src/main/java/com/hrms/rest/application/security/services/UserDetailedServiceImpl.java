package com.hrms.rest.application.security.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hrms.rest.application.models.User;
import com.hrms.rest.application.repositories.UserRepository;

@Service
@Transactional
public class UserDetailedServiceImpl implements UserDetailsService{
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserDetailsImpl userDetailsImpl;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user=userRepository.findByUsername(username);
		return userDetailsImpl.build(user);
	}
	
}
