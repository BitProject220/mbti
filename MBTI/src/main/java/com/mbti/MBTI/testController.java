package com.mbti.MBTI;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {
	
	@GetMapping("hello")
	public String test() {

		return "Hello MBTI PROJECT! ";


	}
}
