package com.mbti.MBTI.user.service;

import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbti.MBTI.user.bean.MbtiTypeDTO;
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
	
	@Override
	public void userMbtiTypeResult(MbtiTypeDTO mbtiTypeDTO) {
		userDAO.userMbtiTypeResult(mbtiTypeDTO);
	}
	
	@Override
	public UserDTO userInfoDeleteCheck(String email) {
		UserDTO userDTO = userDAO.userInfoDeleteCheck(email);
		return userDTO;
	}
	
	@Override
	public void userInfoDelete(String email) {
		userDAO.userInfoDelete(email);
	}
	
	

	@Override
	public MbtiTypeDTO userInfoMain(String mbti_email) {
		MbtiTypeDTO mbtiTypeDTO = userDAO.userInfoMain(mbti_email);
		System.out.println(mbtiTypeDTO+"회원정보수정을 할건데 필요해~");
		return mbtiTypeDTO;
	}
	
	@Override
	public String userMbtiTypeResultCheck(String mbti_email) {
		System.out.println("있나없나 체크하는고여아아아아ㅏ아아아아아아아아아아아앙아아아아아아아아아아아아아ㅏ아앙"+mbti_email);
		MbtiTypeDTO mbtiTypeDTO = userDAO.userMbtiTypeResultCheck(mbti_email);
		if(mbtiTypeDTO == null) {
			 return "nonExist";
			}
			else {
				return "exist";
			}
	}
	
	@Override
	public void userMbtiTypeResultUpdate(MbtiTypeDTO mbtiTypeDTO) {
		userDAO.userMbtiTypeResultUpdate(mbtiTypeDTO);
	}

	//###################유진 끝#################################

	@Override
	public UserDTO loginCheck(Map<String, String> map) {
		UserDTO userDTO = userDAO.loginCheck(map);
		return userDTO;
	}

	

	


	
	

	


	
	
}
