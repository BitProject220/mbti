package com.mbti.MBTI.user.dao;

import java.util.HashMap;
import java.util.Map;

import com.mbti.MBTI.user.bean.MbtiTypeDTO;
import com.mbti.MBTI.user.bean.UserDTO;

public interface UserDAO {

	public void write(UserDTO userDTO);

	public UserDTO emailCheck(String email);
	
	public UserDTO nameCheck(String name);

	public UserDTO findPasswordEmailCheck(Map<String, String> map);

	public void userUpdate(UserDTO userDTO);

	public UserDTO userInfo(String email);

	public void userMbtiTypeResult(MbtiTypeDTO mbtiTypeDTO);

	public UserDTO userInfoDeleteCheck(String email);

	public void userInfoDelete(String email);

	public MbtiTypeDTO userInfoMain(String mbti_email);

	public MbtiTypeDTO userMbtiTypeResultCheck(String mbti_email);

	public void userMbtiTypeResultUpdate(MbtiTypeDTO mbtiTypeDTO);

	public String getpassword(String email);

	public UserDTO findkakao(HashMap<String, Object> userInfo);
	
	public UserDTO loginCheck(String email, String password);

}
