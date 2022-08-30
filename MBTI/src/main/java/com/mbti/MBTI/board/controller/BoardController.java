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
	
//	@GetMapping("/freeBoardList")
//	public Map<Object, Object> boardList(@RequestParam String boardNo, 
//			@RequestParam(value = "pg", required = false, defaultValue = "1") int pg, 
//			@RequestParam(required = false, defaultValue = "date") String sort,
//			@RequestParam String category,
//			@RequestParam String searchKeyword) {
//		
//		
//		//String userWriteTableList = boardService.getBoardlist(category, pg, sort);
////		String boardPagingList = boardService.getBoardPagingList(category, pg, sort);
//		
//		Map<Object, Object> map = new HashMap<Object, Object>();
//		map.put("boardNo", boardNo);
//		map.put("pg", pg);
//		map.put("sort", sort);
//		map.put("category", category);
//		map.put("searchKeyword", searchKeyword);
////	map.put("userWriteTableList", userWriteTableList);
//
//		return map;
//	}

	
	@GetMapping("/freeBoardList")
	public Map<Object, Object> allList(){
		List<Object> tableList = boardDAO.getList();
		Map<Object, Object> map = new HashMap<Object, Object>();
		map.put("tableList", tableList);
		return map;
		
	}
	
}




//
//
//
//
//
//
//
//
//
//
//
//
//
//package com.mbti.MBTI.board.controller;
//
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//import java.util.Date;
//
//import javax.servlet.http.HttpSession;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.mbti.MBTI.board.bean.BoardPaging;
//import com.mbti.MBTI.board.bean.FreeBoardDTO;
//import com.mbti.MBTI.board.dao.BoardDAO;
//import com.mbti.MBTI.board.service.BoardService;
//
//
//@RestController
//@CrossOrigin(origins = "http://localhost:3000")
//@RequestMapping(value="board")
//public class BoardController {
//	
//	@Autowired
//	private BoardService boardService; 
//	
//	@Autowired
//	private BoardDAO boardDAO;
//	
//	
//	
////	@GetMapping("/freeBoardList")
////	public Map<Object, Object> freeBoardList(@RequestParam String boardNo, 
////			@RequestParam(value = "pg", required = false, defaultValue = "1") int pg, 
////			@RequestParam(value="sortOption", required = false, defaultValue = "최신순") String sort,
////			@RequestParam String category,
////			@RequestParam String searchKeyword) {
////		
////		
////		
////		String userWriteTableList = boardService.getFreeBoardlist(category, pg, searchKeyword, sort);
//////		String boardPagingList = boardService.getBoardPagingList(category, pg, sort);
////		
////		Map<Object, Object> map = new HashMap<Object, Object>();
////		map.put("boardNo", boardNo);
////		map.put("pg", pg);
////		map.put("sortOption", sort);
////		map.put("category", category);
////		map.put("searchKeyword", searchKeyword);
////		map.put("getFreeBoardlist", userWriteTableList);
////
////		return map;
////	}
//
////	@GetMapping("/mbtiBoardList")
////	public Map<Object, Object> mbtiBoardList(@RequestParam String boardNo, 
////			@RequestParam(value = "pg", required = false, defaultValue = "1") int pg, 
////			@RequestParam(value="sortOption", required = false, defaultValue = "date") String sort,
////			@RequestParam String category,
////			@RequestParam String searchKeyword) {
////		
////		
////		String userWriteTableList = boardService.getBoardlist(category, pg, sort);
//////		String boardPagingList = boardService.getBoardPagingList(category, pg, sort);
////		
////		Map<Object, Object> map = new HashMap<Object, Object>();
////		map.put("boardNo", boardNo);
////		map.put("pg", pg);
////		map.put("sortOption", sort);
////		map.put("category", category);
////		map.put("searchKeyword", searchKeyword);
//////		map.put("userWriteTableList", userWriteTableList);
////
////		return map;
////	}
//	
//	@GetMapping("/freeBoardList")
//	public Map<Object, Object> allList(){
//		List<Object> tableList = boardDAO.getList();
//		Map<Object, Object> map = new HashMap<Object, Object>();
//		map.put("tableList", tableList);
//		return map;
//		
//	}
//	
////	@GetMapping("/freeBoardList")
////	public Map<Object, Object> freeBoardList(@RequestParam String boardNo, 
////			@RequestParam(value = "pg", required = false, defaultValue = "1") int pg, 
////			@RequestParam(value="sortOption", required = false, defaultValue = "최신순") String sort,
////			@RequestParam String category,
////			@RequestParam String searchKeyword){
////		
////		
////		Map<Object, Object> map = new HashMap<Object, Object>();
////		Map<String, Object> searchInfo = new HashMap<String, Object>();
////		List<FreeBoardDTO> list = new ArrayList<>();
////		
////		
////		map.put(searchKeyword, list);
////		
////		list = boardService.getUserPageArticle(map);
////		
////		
////		map.put("boardNo", boardNo);
////		map.put("pg", pg);
////		map.put("sortOption", sort);
////		map.put("category", category);
////		map.put("searchKeyword", searchKeyword);
//////		map.put("freeBoardTableList", freeBoardTableList);
////		
////		
////		
////		
////		
////		return map;
////	}
//	
//	
//	
//	
//	
//	
//	
	
	
//}