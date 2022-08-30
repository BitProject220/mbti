package com.mbti.MBTI.user.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
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
	
	@Override
	public void userUpdate(UserDTO userDTO) {
		userDAO.userUpdate(userDTO);
		
	}
	
	@Override
	public UserDTO userInfo(String email) {
		UserDTO userDTO = userDAO.userInfo(email);
		System.out.println(userDTO);
		return userDTO;
	}
	//###################유진 끝#################################

	@Override
	public UserDTO loginCheck(Map<String, String> map) {
		UserDTO userDTO = userDAO.loginCheck(map);
		return userDTO;
	}

	@Override
	public UserDTO findPasswordEmailCheck(Map<String, String> map) {
		UserDTO userDTO = userDAO.findPasswordEmailCheck(map);
		return userDTO;
	}

	@Override
	public String getpassword(String email) {
		return userDAO.getpassword(email);
	}
	
}
