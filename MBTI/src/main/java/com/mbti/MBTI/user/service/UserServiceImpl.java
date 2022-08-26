package com.mbti.MBTI.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbti.MBTI.user.bean.UserDTO;
import com.mbti.MBTI.user.dao.UserDAO;

@Service
public class UserServiceImpl implements UserService{
	
	 @Autowired(required = false)
	 private UserDAO userDAO;
	 
//	 @Autowired
//	 public UserServiceImpl(UserDAO userDAO) {
//		 this.userDAO = userDAO;
//
//	 }
	 
	@Override
	public void write(UserDTO userDTO) {
		userDAO.write(userDTO);
	}
	
	//###################유진 회원가입 이메일중복체크###################
	@Override
	public String emailCheck(String email) {
		UserDTO userDTO = userDAO.emailCheck(email); 
		if(userDTO == null) {
		 return "nonExist";
		}
		else {
			return "exist";
		}
		
	}

	@Override
	public String nameCheck(String name) {
		UserDTO userDTO = userDAO.nameCheck(name);
		if(userDTO == null) {
			 return "nonExist";
		}
			else return "exist";
	}
	
	//###################유진 끝#################################

}
