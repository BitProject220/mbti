package com.mbti.MBTI.user.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mbti.MBTI.user.bean.UserDTO;
import com.mbti.MBTI.user.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping(value="/user/write")
	public void write(@RequestBody UserDTO userDTO) {
		
		System.out.println(userDTO);
		userService.write(userDTO);
	}
}
