package com.mbti.MBTI.freeboard.dao;

import java.util.Map;

import javax.transaction.Transactional;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mbti.MBTI.freeboard.bean.FreeBoardDTO;

@Repository
@Transactional
public class FreeBoardDAOMyBatis implements FreeBoardDAO {
	
	@Autowired
	private SqlSession sqlSession = null;
	

	@Override
	public void freeboardwrite(Map<String, String> map) {
		sqlSession.insert("freeboardSQL.freeboardwrite", map);
		
	}


	@Override
	public FreeBoardDTO freeboardview(int seq) {	
		
		return sqlSession.selectOne("freeboardSQL.freeboardview",seq);
	}

}
