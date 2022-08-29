package com.mbti.MBTI.user.dao;

import java.util.HashMap;
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
	//#######################유진끝##########################

	@Override
	public UserDTO loginCheck(Map<String, String> map) {
		return sqlSession.selectOne("userSQL.loginCheck", map);
	}

	@Override
	public UserDTO findPasswordEmailCheck(Map<String, String> map) {
		return sqlSession.selectOne("userSQL.findPasswordEmailCheck", map);
	}

//	@Override
//	public UserDTO findkakao(HashMap<String, Object> userInfo) {
//		System.out.println("RN:"+userInfo.get("nickname"));
//		System.out.println("RE:"+userInfo.get("email"));
//		return sqlSession.selectOne("userSQL.findkakao", userInfo);
//	}
//
//	@Override
//	public void kakaoinsert(HashMap<String, Object> userInfo) {
//		sqlSession.insert("userSQL.kakaoinsert",userInfo);
//		
//	}
//
//	@Override
//	public void updateBykakao(HashMap<String, Object> userInfo) {
//		sqlSession.update("userSQL.updateBykakao", userInfo);
//		
//	}

}
