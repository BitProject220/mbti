package com.mbti.MBTI.user.service;

import org.springframework.stereotype.Service;

import com.mbti.MBTI.user.bean.UserDTO;

@Service
public interface UserService {

	public void write(UserDTO userDTO);

	public String emailCheck(String email);


	

}
