package com.mbti.MBTI.user.controller;


import java.nio.file.Files;
import java.util.Properties;
import java.util.Random;

import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
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
	
	@Autowired
	private JavaMailSender mailSender;
	
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@PostMapping(value="/user/write")
	public void write(@RequestBody UserDTO userDTO) {
		
		System.out.println(userDTO);
		userService.write(userDTO);
	}
	
	//###################유진 시작#################################
	
	@PostMapping(value = "/user/emailCheck")
	public String emailCheck(@RequestBody String email) {
		System.out.println(email.toString());
		return userService.emailCheck(email.toString());
	}
	
	@GetMapping(value = "/user/emailNumCheck")
	public String emailNumCheck(String email) throws Exception{
			logger.info("이메일 인증 요청이 들어옴!"+email);
	        logger.info("인증번호 : " + email);
			//return  mailService.joinEmail(user_email);
	        
	        /* 인증번호(난수) 생성 */
	        Random random = new Random();
	        int checkNum = random.nextInt(888888) + 111111;
	        logger.info("인증번호 " + checkNum);
	        
	        /* 이메일 보내기 */
	        String setFrom = "yujin980810@gmail.com";
	        String toMail = email;
	        String title = "이메일 인증 메일 입니다.";
	        String content = 
	       
			 "<div><h2 style='margin-top:10px; font-size: 24px;'>홈페이지를 방문해주셔서 감사합니다.<br><br>아래의 인증번호를 인증번호 확인란에 기입하여 주세요.</h2>"
			+ "<p style='font-size:18px;'>인증 번호 : <span style='padding: 10px; background: #d2e9fc;'>" + checkNum + "</span> </p>"
			+ "<div>";
	        
	        try {
	            
	            MimeMessage message = mailSender.createMimeMessage();
	            MimeMessageHelper helper = new MimeMessageHelper(message, true, "utf-8");
	            helper.setFrom(setFrom);
	            helper.setTo(toMail);
	            helper.setSubject(title);
	            helper.setText(content,true);
	            mailSender.send(message);
	            
	        }catch(Exception e) {
	            e.printStackTrace();
	        }
	        String num = Integer.toString(checkNum);
	        
	        return num;
		
	}
	
	@PostMapping(value = "/user/nameCheck")
	public String nameCheck(@RequestBody String name) {
		System.out.println("이름은"+name);
		return userService.nameCheck(name);
	}
	

	
	
	//###################유진 끝#################################
	
}
