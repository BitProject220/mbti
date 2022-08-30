package com.mbti.MBTI.user.bean;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class MbtiTypeDTO {
	private int mbti_seq;
	private String mbti_email;
	private String mbti_type;
	private String mbti_EI;
	private String mbti_NS;
	private String mbti_TF;
	private String mbti_JP;
	private String mbti_AT;
	private Timestamp mbti_logtime;

}
