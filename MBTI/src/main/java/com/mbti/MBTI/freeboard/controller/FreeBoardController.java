package com.mbti.MBTI.freeboard.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.mbti.MBTI.freeboard.bean.FreeBoardDTO;
import com.mbti.MBTI.freeboard.sevice.FreeBoardService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FreeBoardController {
	
	@Autowired
	private FreeBoardService freeBoardService;

	@PostMapping(value="/board/freeboardwrite")
	public void freeboardwrite (@RequestParam Map<String,String> map) {
		freeBoardService.freeboardwrite(map);
	}
	
	@PostMapping(value="/board/freeboardview")
	public FreeBoardDTO freeboardview (@RequestParam int seq) {
		FreeBoardDTO freeBoardDTO = new FreeBoardDTO();
		return freeBoardService.freeboardview(seq);
	}
}
