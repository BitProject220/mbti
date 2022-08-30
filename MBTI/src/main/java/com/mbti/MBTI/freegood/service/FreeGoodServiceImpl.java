package com.mbti.MBTI.freegood.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbti.MBTI.freegood.dao.FreeGoodDAO;

@Service
public class FreeGoodServiceImpl implements FreeGoodService {
	
	@Autowired
	private FreeGoodDAO freeGoodDAO;

	@Override
	public int goodcount(int seq) {
		return freeGoodDAO.goodcount(seq);
	}


}
