package com.mbti.MBTI.FreeComment.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.bind.ParseConversionEvent;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mbti.MBTI.FreeComment.bean.FreeCommentDTO;
import com.mbti.MBTI.FreeComment.service.FreeCommentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FreeCommentController {

	@Autowired
	private FreeCommentService freeCommentService;

	@Autowired
	private SqlSession sqlSession = null;
	
	
	
	// ###################범주 시작#################################
	@PostMapping(value = "/reply/commentWrite")
	public void commentWrite(@RequestBody FreeCommentDTO freeCommentDTO) {
		freeCommentService.commentWrite(freeCommentDTO);
	}
	@PostMapping(value = "/reply/userComment")
	public List<FreeCommentDTO> userComment(@RequestBody FreeCommentDTO fc_FreeBoardseq) {
		// 1. 요청에 따른 결과값을 JSON Array의 형태를 가진 스트링으로 변환하다.
		// 2. 현재 로그인한 유저가 누구인지를 JSON 형태로 변환한다.
		// 3. 1번과 2번의 값을 가진 JSON 형태로 나타내서 리턴한다.
		return freeCommentService.userComment(fc_FreeBoardseq);
	}
	// 이에일을 가져가서 같은 이메일 데이터를 가진 글을 삭제할수있게하기
	// @Requestbody == JSON
	// @RequestParam == string 
	@PostMapping(value = "/reply/commentDelete")
	public void commentDelete(@RequestBody String fc_seq) {
		String str = fc_seq;
		String intStr = str.replaceAll("[^0-9]", "");
		int fc_seqi = Integer.parseInt(intStr);
		freeCommentService.commentDelete(fc_seqi);
	}
	
	// ###################범주 끝#################################
}
