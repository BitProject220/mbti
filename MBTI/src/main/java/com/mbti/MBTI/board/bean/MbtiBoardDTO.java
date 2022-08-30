package com.mbti.MBTI.board.bean;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MbtiBoardDTO {
	
	private int mb_seq;
	private String mb_category;
	private String mb_email;
	private String mb_name;			
	private String mb_subject;
	private String mb_content;	
	private int mb_freevote;
	private int mb_hit;		
	private Date mb_logtime;	

}
