package com.mbti.MBTI.board.bean;

import java.util.Date;

import lombok.Data;


@Data
public class FreeBoardDTO {
	private int fb_seq;
	private String fb_email;
	private String fb_name;			
	private String fb_subject;
	private String fb_content;	
	private int fb_freevote;
	private int fb_hit;		
	private Date fb_logtime;	

}
