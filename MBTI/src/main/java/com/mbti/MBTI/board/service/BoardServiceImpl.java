package com.mbti.MBTI.board.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbti.MBTI.board.bean.BoardPaging;
import com.mbti.MBTI.board.bean.FreeBoardDTO;
import com.mbti.MBTI.board.dao.BoardDAO;

@Service
public class BoardServiceImpl implements BoardService {
	
	@Autowired
	private BoardDAO boardDAO;
	
	private String sortToString(String sort) {
		String result = null;
		switch(sort){
		case "최신순" : result = "date"; break;
		case "추천순" : result = "vote"; break;
		case "조회순" : result = "view"; break;
		}
		
		return result;
	}
	
	
	private int stringCateToInt(String category) {
		int result = -1;
		switch(category){
			case "전체" : result = 1; break;
			case "제목" : result = 2; break;
			case "내용" : result = 3; break;
			case "작성자" : result = 4; break;
		}
		
		return result;
	}
	private String cateidToString(int cateid) {
		String result = null;
		switch(cateid){
		case 1 : result = "전체"; break;
		case 2 : result = "제목"; break;
		case 3 : result = "내용"; break;
		case 4 : result = "작성자"; break;
		}
		
		return result;
	}

	@Override
	public String getFreeBoardlist(String category, int pg,String searchKeyword, String sort) {
		int cateid = stringCateToInt(category);
		String sortOption = sortToString(sort);
		
		int boardPerPage = 10;
		int startNum = 1 + boardPerPage*(pg-1);
		int endNum = boardPerPage + boardPerPage*(pg-1);
		
		Map<String, String> map = new HashMap<String, String>();
		map.put("cateid",Integer.toString(cateid));
		map.put("startNum", Integer.toString(startNum));
		map.put("endNum", Integer.toString(endNum));
		map.put("searchKeyword", searchKeyword);
		
		List<FreeBoardDTO> list = boardDAO.getBoardRangeOrder(map, sortOption);
		
		
		return list.toString();
	}



}
