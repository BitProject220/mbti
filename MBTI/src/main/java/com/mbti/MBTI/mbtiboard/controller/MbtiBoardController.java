package com.mbti.MBTI.mbtiboard.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mbti.MBTI.mbtiboard.service.MbtiBoardService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MbtiBoardController {
		
		@Autowired
		private MbtiBoardService mbtiBoardService;
		
		@PostMapping(value="/board/mbtiboardwrite")
		public void mbtiboardwrite (@RequestParam Map<String,String> map) {
			
			mbtiBoardService.mbtiboardwrite(map);
		}
		
}

