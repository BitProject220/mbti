package com.mbti.MBTI.board.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Date;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mbti.MBTI.board.bean.BoardPaging;
import com.mbti.MBTI.board.bean.FreeBoardDTO;
import com.mbti.MBTI.board.dao.BoardDAO;
import com.mbti.MBTI.board.service.BoardService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="board")
public class BoardController {
	
	@Autowired
	private BoardService boardService; 
	
	@Autowired
	private BoardDAO boardDAO;
	
	@GetMapping("/freeBoardList")
	public Map<Object, Object> allList(){
//		Map<Object, Object> freeList = boardDAO.getFreeList();
		List<Object> tableList = boardDAO.getList();
		Map<Object, Object> map = new HashMap<Object, Object>();
		System.out.println(tableList);
//		map.put("seq", tableList);
//		map.put("email", tableList);
//		map.put("name", tableList);
//		map.put("subject", tableList);
//		map.put("content", tableList);
//		map.put("vote", tableList);
//		map.put("hit", tableList);
//		map.put("logtime", tableList);
		
		map.put("tableList", tableList);
		return map;
		
	}
	
	@GetMapping("/mbtiBoardList")
	public Map<Object, Object> allMbtiList(){
		List<Object> mbtitableList = boardDAO.getMbtiList();
		Map<Object, Object> map = new HashMap<Object, Object>();
		
		map.put("mbtitableList", mbtitableList);
		return map;
		
	}
	
}