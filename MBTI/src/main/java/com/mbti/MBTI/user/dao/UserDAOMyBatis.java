package com.mbti.MBTI.user.dao;

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


}
