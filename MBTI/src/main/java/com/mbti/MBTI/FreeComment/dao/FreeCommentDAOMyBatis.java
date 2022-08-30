package com.mbti.MBTI.FreeComment.dao;

import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mbti.MBTI.FreeComment.bean.FreeCommentDTO;

@Repository
@Transactional
public class FreeCommentDAOMyBatis implements FreeCommentDAO{

	@Autowired
	private SqlSession sqlSession = null;

	@Override
	public void commentWrite(FreeCommentDTO freeCommentDTO) {
		sqlSession.insert("freecommentSQL.commentWrite", freeCommentDTO);
	}

	@Override
	public List<FreeCommentDTO> userComment(FreeCommentDTO freeCommentDTO) {
		
		return sqlSession.selectList("freecommentSQL.userComment", freeCommentDTO);
	}

	
	

	

}
