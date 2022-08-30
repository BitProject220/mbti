package com.mbti.MBTI.mbtiboard.bean;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class MbtiBoardDTO {

	private int seq;
	private String category;
	private String email;
	private String name;
	private String subject;
	private String content;
	private int freevote;
	private int hit;
	private Timestamp logtime;
}
