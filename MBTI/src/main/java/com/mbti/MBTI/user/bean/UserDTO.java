package com.mbti.MBTI.user.bean;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;

@Data
public class UserDTO {
	
	private int seq;
	
	private String name;
	
	private String password;
	
	private String email;
	
	private int age;
	
	private String gender;
	
	private Timestamp logtime;
	
}
