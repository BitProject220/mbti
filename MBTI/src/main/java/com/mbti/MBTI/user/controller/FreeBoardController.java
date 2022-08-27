package com.mbti.MBTI.user.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mbti.MBTI.user.bean.FreeBoardDTO;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FreeBoardController {

	@PostMapping(value="/board/freeboardwrite")
	public void write (@RequestBody FreeBoardDTO freeBoardDTO) {
		
	}
}
