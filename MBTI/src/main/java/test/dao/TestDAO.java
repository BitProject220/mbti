package test.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import test.bean.TestDTO;


public interface TestDAO extends JpaRepository<TestDTO, String>{

}
