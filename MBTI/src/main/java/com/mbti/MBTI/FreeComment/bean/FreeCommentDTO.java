package com.mbti.MBTI.FreeComment.bean;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class FreeCommentDTO {
	private int fc_seq;
	
	private String fc_email;
	
	private String fc_name;
	
	private String fc_commentContent;
	
	private int fc_FreeBoardseq; 
	
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy.MM.dd")
	private Timestamp fc_logtime;

}
