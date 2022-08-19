package user.bean;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;

@Entity
@Table(name="mbtiuser")
@Data
public class UserDTO {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="seq")
	private int seq;
	
	@Column(name="name",nullable = false,length = 30)
	private String name;
	
	@Id
	@Column(name="email", nullable = false,length = 30)
	private String email;
	
	@Column(name="age")
	private int age;
	
	@Column(name="gender")
	private int gender;
	
	@CreationTimestamp
	private Timestamp logtime;
	
}
