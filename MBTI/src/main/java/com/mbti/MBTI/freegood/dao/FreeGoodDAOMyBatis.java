package com.mbti.MBTI.freegood.dao;

import javax.transaction.Transactional;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class FreeGoodDAOMyBatis implements FreeGoodDAO {
	
	@Autowired
	private SqlSession sqlSession = null;

	@Override
	public int goodcount(int seq) {
		
		return sqlSession.selectOne("freegoodSQL.goodcount", seq);
	}
	
}
