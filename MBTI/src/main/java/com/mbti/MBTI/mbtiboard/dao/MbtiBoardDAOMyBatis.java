package com.mbti.MBTI.mbtiboard.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

public class MbtiBoardDAOMyBatis implements MbtiBoardDAO {
	
	@Autowired
	private SqlSession sqlSession = null;
}
