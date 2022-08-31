package com.mbti.MBTI.freeboard.dao;

import java.util.Map;

import javax.transaction.Transactional;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mbti.MBTI.freeboard.bean.FreeBoardDTO;
import com.mbti.MBTI.freegood.bean.FreeGoodDTO;

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
		System.out.println(seq);
		return sqlSession.selectOne("freeboardSQL.freeboardview",seq);
	}


	@Override
	public void feeboardhit(int seq) {
		sqlSession.update("freeboardSQL.freeboardhit",seq);
		
	}


	@Override
	public void freeboarddelete(int seq) {
		sqlSession.delete("freeboardSQL.freeboarddelete", seq);
	}

	public FreeGoodDTO freeboardviewLikeCheck(Map<String, Object> map) {
		return sqlSession.selectOne("freeboardSQL.freeboardviewLikeCheck",map);
	}


	@Override
	public void freeboardviewLikeplus(Map<String, Object> map) {
		sqlSession.insert("freeboardSQL.freeboardviewLikeplus",map);
		
	}


	@Override
	public void freeboardupdate(int seq) {
		sqlSession.update("freeboardSQL.freeboardupdate", seq);
		
	}


	public void freeboardviewLikeMinus(Map<String, Object> map) {
		sqlSession.delete("freeboardSQL.freeboardviewLikeMinus",map);
		
	}
}
