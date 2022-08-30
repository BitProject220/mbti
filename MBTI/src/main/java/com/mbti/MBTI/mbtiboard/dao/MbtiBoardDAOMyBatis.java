package com.mbti.MBTI.mbtiboard.dao;

import java.util.Map;

import javax.transaction.Transactional;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class MbtiBoardDAOMyBatis implements MbtiBoardDAO {
	
	@Autowired
	private SqlSession sqlSession = null;

	@Override
	public void mbtiboardwrite(Map<String, String> map) {
		System.out.println(map);
		
		sqlSession.insert("mbSQL.mbtiboardwrite", map);
		
	}
}
