package com.mbti.MBTI.mbtiboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.mbti.MBTI.mbtiboard.service.MbtiBoardService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MbtiBoardController {
		
		@Autowired
		private MbtiBoardService mbtiBoardService;
}
