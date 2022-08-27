package com.mbti.MBTI.user.dao;

import java.util.Map;

import javax.transaction.Transactional;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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
	//#######################유진끝##########################

	@Override
	public UserDTO loginCheck(Map<String, String> map) {
		return sqlSession.selectOne("userSQL.loginCheck", map);
	}


	

}
