package com.mbti.MBTI.freegood.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbti.MBTI.freegood.dao.FreeGoodDAO;

@Service
public class FreeGoodServiceImpl implements FreeGoodService {
	
	@Autowired
	private FreeGoodDAO freeGoodDAO;

	@Override
	public int goodupdate(int seq, String email) {
		
		Map<String, Object > map = new HashMap<String, Object>();
		map.put("email", email);
		map.put("seq", seq);
		return freeGoodDAO.goodupdate(map);
	}

	


}
