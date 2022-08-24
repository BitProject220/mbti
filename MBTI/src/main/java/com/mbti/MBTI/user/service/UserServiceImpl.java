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

}
