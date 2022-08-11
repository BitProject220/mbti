package test.service;

import org.springframework.beans.factory.annotation.Autowired;

import test.bean.TestDTO;
import test.dao.TestDAO;

public class TestServiceImpl implements TestService {

	@Autowired
	private TestDAO testDAO;

	
	@Override
	public void update(TestDTO testDTO) {
		testDAO.save(testDTO);

	}

	@Override
	public void delete(String id) {
		testDAO.deleteById(id);
		
	}

}
