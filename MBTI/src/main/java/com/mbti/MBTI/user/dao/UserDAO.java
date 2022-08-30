package com.mbti.MBTI.user.dao;

import java.util.HashMap;
import java.util.Map;

import com.mbti.MBTI.user.bean.UserDTO;

public interface UserDAO {

	public void write(UserDTO userDTO);

	public UserDTO emailCheck(String email);

	public UserDTO loginCheck(Map<String, String> map);
	
	public UserDTO nameCheck(String name);

	public UserDTO findPasswordEmailCheck(Map<String, String> map);

//	public UserDTO findkakao(HashMap<String, Object> userInfo);
//
//	public void kakaoinsert(HashMap<String, Object> userInfo);
//
//	public void updateBykakao(HashMap<String, Object> userInfo);

	public void userUpdate(UserDTO userDTO);

	public UserDTO userInfo(String email);

	public String getpassword(String email);

	public UserDTO findkakao(HashMap<String, Object> userInfo);

	public void kakaoinsert(HashMap<String, Object> userInfo);

	
}
