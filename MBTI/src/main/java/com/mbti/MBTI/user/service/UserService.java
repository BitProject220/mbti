package com.mbti.MBTI.user.service;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.mbti.MBTI.user.bean.UserDTO;

@Service
public interface UserService {

	public void write(UserDTO userDTO);

	public String emailCheck(String email);

	public String loginCheck(Map<String, String> map);

	public String nameCheck(String name);

	

}
