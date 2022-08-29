package com.mbti.MBTI.user.controller;


import java.util.Map;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
//import com.google.gson.Gson;
import com.mbti.MBTI.user.bean.UserDTO;
//import com.mbti.MBTI.user.service.BCryptPasswordEncoder;
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
	public String emailCheck(@RequestParam String email) {
		  
		System.out.println("이메일은-------------------------------"+email);
		return userService.emailCheck(email);
		
	}
	
	@PostMapping(value = "/user/emailNumCheck")
	public String emailNumCheck(@RequestParam String email) throws Exception{
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
	public String nameCheck(@RequestParam String name) {
		System.out.println("이름은"+name);
		return userService.nameCheck(name);
	}
	//###################유진 끝#################################
	
	//로그인 아이디 비밀번호 있는지 확인
	@PostMapping(value = "/user/loginCheck")
	@ResponseBody
	public UserDTO loginCheck(@RequestParam Map<String, String> map) {
		return userService.loginCheck(map);
	}
	
	//비밀번호 난수 발생
	public static String tempPassword(int leng){
		int index = 0;
		char[] charSet = new char[] {
				'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                '!', '@', '#', '$', '%', '^', '&'
		};	//배열안의 문자 숫자는 원하는대로
		StringBuffer password = new StringBuffer();
		Random random = new Random();
		for (int i = 0; i < leng ; i++) {
			double rd = random.nextDouble();
			index = (int) (charSet.length * rd);
			password.append(charSet[index]);
			System.out.println("index::" + index + "	charSet::"+ charSet[index]);
		}
		return password.toString();  //StringBuffer를 String으로 변환해서 return 하려면 toString()을 사용하면 된다.
	}	
	//이메일로 비밀번호 보내기
	@PostMapping(value = "/user/findPasswordEmailSend")
	public String findPasswordEmailSend(@RequestParam String email) throws Exception{
		logger.info("이메일 인증 요청이 들어옴!" + email);
		logger.info("인증번호" + email);
		
		//인증번호 난수 생성
		String pw = tempPassword(10);
		logger.info("인증번호 " + pw);
		
		//이메일 보내기
		String setFrom = "seungchan98@gmail.com";
        String toMail = email;
        String title = "이메일 인증 메일 입니다.";
        String content = 
		 "<div><h2 style='margin-top:10px; font-size: 24px;'>홈페이지를 방문해주셔서 감사합니다.<br><br>아래에 임시비밀번호를 보냈습니다.</h2>"
		+ "<p style='font-size:18px;'>비밀번호 : <span style='padding: 10px; background: #d2e9fc;'>" + pw + "</span> </p>"
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
        String num = pw;
        return num;
	}
	
	//비밀번호잃어버렸을때 이메일이 있는지 확인
	@PostMapping(value = "/user/findPasswordEmailCheck")
	@ResponseBody
	public UserDTO findPasswordEmailCheck(@RequestParam Map<String, String> map) {
		return userService.findPasswordEmailCheck(map);
	}
	
//	//카카오 로그인
//	@GetMapping(value = "/user/kakaoLogin")
//	public String kakaoLogin(@RequestParam(value = "code", required = false) String code) throws Exception{
//		System.out.println("코드는:" + code);
//		String access_Token = userService.getAccessToken(code);
//		
//		UserDTO userInfo = userService.getUserInfo(access_Token);
//		
//	}
}
