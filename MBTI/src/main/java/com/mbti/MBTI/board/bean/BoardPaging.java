package com.mbti.MBTI.board.bean;

import org.springframework.beans.factory.annotation.Autowired;

import com.mbti.MBTI.board.dao.BoardDAO;

import lombok.Data;

@Data
public class BoardPaging {
	
	@Autowired
	private BoardDAO boardDAO;
	
	
//	public String getUserPagesPaging(int pg, int userId) {
//		BoardForUserPagePaging boardForUserPagePaging = new BoardForUserPagePaging();
//		boardForUserPagePaging.setCurrentPage(pg);
//		boardForUserPagePaging.setPageBlock(10); //이전 다음 사이에 10개의 page
//		boardForUserPagePaging.setPageSize(10); //page 당 10개의 글 존재
//		boardForUserPagePaging.setTotalA(boardDAO.UserPagePaging(userId));  //sql select count(*)
//		boardForUserPagePaging.makeUserPagingHTML(userId, pg);
//		
//		System.out.println("boardForUserPagePaging = " + boardForUserPagePaging.getTotalA());
// 
//		return boardForUserPagePaging.getPagingHTML().toString();
}
