package com.mbti.MBTI.freeboard.bean;

import java.sql.Timestamp;


import lombok.Data;


	@Data
	public class FreeBoardDTO {

			private int seq;
			private String email;
			private String name;
			private String subject;
			private String content;
			private int freevote;
			private int hit;
			private Timestamp logtime;
	
}
