package com.mbti.MBTI.freeboard.sevice;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbti.MBTI.freeboard.bean.FreeBoardDTO;
import com.mbti.MBTI.freeboard.dao.FreeBoardDAO;

@Service
public class FreeBoardServiceImpl implements FreeBoardService {
	
	@Autowired(required = false)
	private FreeBoardDAO freeBoardDAO;

	@Override
	public void freeboardwrite(Map<String, String> map) {
		
		freeBoardDAO.freeboardwrite(map);
		
	}
	
	@Override
	public FreeBoardDTO freeboardview(int seq) {
		FreeBoardDTO freeBoardDTO = freeBoardDAO.freeboardview(seq);
		
		return freeBoardDTO;
	}

}
