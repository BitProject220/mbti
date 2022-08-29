package com.mbti.MBTI.FreeComment.bean;

import java.sql.Timestamp;

import com.mbti.MBTI.user.bean.UserDTO;

import lombok.Data;

@Data
public class FreeCommentDTO {
	private int fc_seq;
	
	private String fc_email;
	
	private String fc_name;
	
	private String fc_commentContent;
	
	private int fc_FreeBoardseq;
	
	private Timestamp fc_logtime;

}
