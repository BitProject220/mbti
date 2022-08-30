package com.mbti.MBTI.freegood.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mbti.MBTI.freegood.service.FreeGoodService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FreeGoodController {
	
	@Autowired
	private FreeGoodService freeGoodService;

	@PostMapping(value="/board/goodcount")
	public int goodcount (@RequestParam int seq) {
		
		return freeGoodService.goodcount(seq);
	}
	
}	
