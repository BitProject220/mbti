package com.mbti.MBTI.user.dao;

import java.util.Map;

import com.mbti.MBTI.user.bean.UserDTO;

public interface UserDAO {

	public void write(UserDTO userDTO);

	public UserDTO emailCheck(String email);

	public UserDTO loginCheck(Map<String, String> map);
	
}
