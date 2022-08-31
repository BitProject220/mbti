package com.mbti.MBTI.board.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mbti.MBTI.board.bean.FreeBoardDTO;

@Repository
@Transactional
public class BoardDAOMyBatis implements BoardDAO {
	@Autowired
	private SqlSession sqlSession;

	@Override
	public List<FreeBoardDTO> getBoardRangeOrder(Map<String, String> map, String sortOption) {
		List<FreeBoardDTO> list = new ArrayList<>();
		map.put("sortOption", sortOption);
		list = sqlSession.selectList("boardSQL.getBoardSearchRangeOrder", map);
		return list;
	}

	@Override
	public List<Object> getList() {

		return sqlSession.selectList("boardSQL.allList");
	}

	@Override
	public List<Object> getMbtiList() {
		
		return sqlSession.selectList("boardSQL.allMbtiList");
	}


}
