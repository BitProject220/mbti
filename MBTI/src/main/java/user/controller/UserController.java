package user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import user.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping(value="/user/write")
	public void write() {
		userService.write();
	}
	
	//###################유진 시작#################################
	
	@PostMapping(value = "/user/emailCheck")
	public String emailCheck(String email) {
		return userService.emailCheck(email);
	}
	
	//###################유진 끝#################################
}
