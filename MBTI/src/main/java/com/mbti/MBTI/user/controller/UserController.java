package com.mbti.MBTI.user.controller;


import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mbti.MBTI.user.bean.UserDTO;
import com.mbti.MBTI.user.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@PostMapping(value="/user/write")
	public void write(@RequestBody UserDTO userDTO) {
		
		System.out.println(userDTO);
		userService.write(userDTO);
	}
	
	//###################유진 시작#################################
	
	@PostMapping(value = "/user/emailCheck")
	public String emailCheck(@RequestParam String email) {
		return userService.emailCheck(email);
	}
	
	@GetMapping("emailNumCheck")
	public String emailNumCheck(String email) throws Exception{
		logger.info("이메일 인증 요청이 들어옴!"+email);
        logger.info("인증번호 : " + email);
        
        /* 인증번호(난수) 생성 */
        Random random = new Random();
        int checkNum = random.nextInt(888888) + 111111;
        logger.info("인증번호 " + checkNum);
        
        String num = Integer.toString(checkNum);
        
        return num;
	}
	
	//###################유진 끝#################################
	
}
