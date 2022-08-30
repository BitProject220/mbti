package com.mbti.MBTI.FreeComment.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mbti.MBTI.FreeComment.bean.FreeCommentDTO;
import com.mbti.MBTI.FreeComment.service.FreeCommentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FreeCommentController {
	
	@Autowired
	private FreeCommentService freeCommentService;
	
	//###################범주 시작#################################
	
	@PostMapping(value = "/reply/commentWrite")
	public void commentWrite(@RequestBody FreeCommentDTO freeCommentDTO) {
		System.out.println(freeCommentDTO);
		freeCommentService.commentWrite(freeCommentDTO);

	}
	
	
	@PostMapping(value = "/reply/userComment")
	public List<FreeCommentDTO> userComment(@RequestBody FreeCommentDTO fc_FreeBoardseq) {
		System.out.println(fc_FreeBoardseq+"fc_FreeBoardseq 확인");
		return freeCommentService.userComment(fc_FreeBoardseq);
	}

	@GetMapping(value = "/reply/userComment")
	@ResponseBody
	public List<FreeCommentDTO> userComment() {
		return null;
	}
	
	//###################범주 끝#################################
}
