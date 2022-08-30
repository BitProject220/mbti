package com.mbti.MBTI.user.dao;

import java.util.HashMap;
import java.util.Map;

import javax.transaction.Transactional;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mbti.MBTI.user.bean.MbtiTypeDTO;
import com.mbti.MBTI.user.bean.UserDTO;

@Repository
@Transactional
public class UserDAOMyBatis implements UserDAO {

	@Autowired
	private SqlSession sqlSession = null;
	
	@Override
	public void write(UserDTO userDTO) {
		sqlSession.insert("userSQL.write",userDTO);
	}
	
	//#######################유진시작##########################
	@Override
	public UserDTO emailCheck(String email) {
		return sqlSession.selectOne("userSQL.emailCheck",email);
		 
	}

	@Override
	public UserDTO nameCheck(String name) {
		return sqlSession.selectOne("userSQL.nameCheck",name);
	}
	
	@Override
	public void userUpdate(UserDTO userDTO) {
		sqlSession.update("userSQL.userUpdate", userDTO);
		
	}

	@Override
	public UserDTO userInfo(String email) {
		return sqlSession.selectOne("userSQL.userInfo",email);
	}
	
	@Override
	public void userMbtiTypeResult(MbtiTypeDTO mbtiTypeDTO) {
		sqlSession.insert("userSQL.userMbtiTypeResult",mbtiTypeDTO);	
	}
		
	@Override
	public UserDTO userInfoDeleteCheck(String email) {
		return sqlSession.selectOne("userSQL.userInfoDeleteCheck",email);
	}
	
	@Override
	public void userInfoDelete(String email) {
		sqlSession.delete("userSQL.userInfoDelete",email);
		
	}

	@Override
	public MbtiTypeDTO userInfoMain(String mbti_email) {
		return sqlSession.selectOne("userSQL.userInfoMain",mbti_email);
	}
	
	@Override
	public MbtiTypeDTO userMbtiTypeResultCheck(String mbti_email) {
		return sqlSession.selectOne("userSQL.userMbtiTypeResultCheck",mbti_email);
	}
	
	@Override
	public void userMbtiTypeResultUpdate(MbtiTypeDTO mbtiTypeDTO) {
		sqlSession.update("userSQL.userMbtiTypeResultUpdate",mbtiTypeDTO);
		
	}
	//#######################유진끝##########################

	
	@Override
	public UserDTO findPasswordEmailCheck(Map<String, String> map) {
		return sqlSession.selectOne("userSQL.findPasswordEmailCheck", map);
	}

	@Override
	public String getpassword(String email) {
		return sqlSession.selectOne("userSQL.getpassword",email);
	}

	@Override
	public UserDTO loginCheck(String email, String password) {
		UserDTO userDTO = new UserDTO();
		userDTO.setEmail(email);
		userDTO.setPassword(password);
		
		return sqlSession.selectOne("userSQL.loginCheck", userDTO);
	}

	
}
