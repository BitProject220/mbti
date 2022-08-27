package com.mbti.MBTI.user.service;


import com.mbti.MBTI.user.bean.UserDTO;

public interface UserService {

	public void write(UserDTO userDTO);

	public String emailCheck(String email);

	public String nameCheck(String name);

	

}
