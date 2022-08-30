package com.mbti.MBTI.mbtiboard.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbti.MBTI.mbtiboard.dao.MbtiBoardDAO;

@Service
public class MbtiBoardServiceImpl implements MbtiBoardService {

	@Autowired(required = false)
	private MbtiBoardDAO MbtiBoardDAO;
}
