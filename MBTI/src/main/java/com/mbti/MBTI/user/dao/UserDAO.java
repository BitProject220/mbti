package com.mbti.MBTI.user.dao;

import com.mbti.MBTI.user.bean.UserDTO;

public interface UserDAO {

	public void write(UserDTO userDTO);

	public UserDTO emailCheck(String email);

	public UserDTO nameCheck(String name);
	
}
