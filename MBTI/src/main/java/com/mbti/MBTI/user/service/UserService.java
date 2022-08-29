package com.mbti.MBTI.user.service;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.mbti.MBTI.user.bean.UserDTO;

public interface UserService {

	public void write(UserDTO userDTO);

	public String emailCheck(String email);

	public UserDTO loginCheck(Map<String, String> map);

	public String nameCheck(String name);

	public UserDTO findPasswordEmailCheck(Map<String, String> map);
//
//	public String getAccessToken(String code);
//
//	public UserDTO getUserInfo(String access_Token);
	public void userUpdate(UserDTO userDTO);

	public UserDTO userInfo(String email);

	

}
