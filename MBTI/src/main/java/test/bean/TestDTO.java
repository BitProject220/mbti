package test.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "testtable")
@Data
public class TestDTO {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "seq", nullable = false)
	int seq; 
	
	@Column(name = "name", length = 30)
	String name;
	 
}
