package com.mbti.MBTI.user.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.mbti.MBTI.user.bean.MbtiTypeDTO;
import com.mbti.MBTI.user.bean.UserDTO;

public interface UserService {

	public void write(UserDTO userDTO);

	public String emailCheck(String email);

	public UserDTO loginCheck(Map<String, String> map);

	public String nameCheck(String name);

	public UserDTO findPasswordEmailCheck(Map<String, String> map);

	public void userUpdate(UserDTO userDTO);

	public String getpassword(String email);

	public UserDTO userInfo(String email);

	public void userMbtiTypeResult(MbtiTypeDTO mbtiTypeDTO);

	public UserDTO userInfoDeleteCheck(String email);

	public void userInfoDelete(String email);

	public MbtiTypeDTO userInfoMain(String mbti_email);

	public String userMbtiTypeResultCheck(String mbti_email);

	public void userMbtiTypeResultUpdate(MbtiTypeDTO mbtiTypeDTO);

}
