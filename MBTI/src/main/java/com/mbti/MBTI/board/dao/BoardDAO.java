package com.mbti.MBTI.board.dao;

import java.util.List;
import java.util.Map;

import com.mbti.MBTI.board.bean.FreeBoardDTO;

public interface BoardDAO {

	List<FreeBoardDTO> getBoardRangeOrder(Map<String, String> map, String sortOption);

	List<Object> getList();

}
