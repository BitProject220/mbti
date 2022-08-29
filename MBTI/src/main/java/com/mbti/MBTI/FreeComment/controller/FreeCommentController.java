package com.mbti.MBTI.FreeComment.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	@GetMapping(value = "/reply/userComment")
	@ResponseBody
	public List<FreeCommentDTO> userComment() {
		return freeCommentService.userComment();
	}
	
	//###################범주 끝#################################
}
