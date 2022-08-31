package com.mbti.MBTI.freeboard.sevice;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbti.MBTI.freeboard.bean.FreeBoardDTO;
import com.mbti.MBTI.freeboard.dao.FreeBoardDAO;
import com.mbti.MBTI.freegood.bean.FreeGoodDTO;

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
		freeBoardDAO.feeboardhit(seq);
		System.out.println(freeBoardDTO);
		return freeBoardDTO;
	}

	@Override
	public void freeboarddelete(int seq) {
		freeBoardDAO.freeboarddelete(seq);
	}

	@Override
	public void freeboardupdate(int seq) {
		freeBoardDAO.freeboardupdate(seq);

	@Override
	public String freeboardviewLikeCheck(Map<String, Object> map) {

		FreeGoodDTO freeGoodDTO = freeBoardDAO.freeboardviewLikeCheck(map);
		if(freeGoodDTO == null) {
			return "nonExit";
		}else {
			return "exit";
		}
	}

	@Override
	public void freeboardviewLikeplus(Map<String, Object> map) {
		freeBoardDAO.freeboardviewLikeplus(map);
	}

	@Override
	public void freeboardviewLikeMinus(Map<String, Object> map) {
		freeBoardDAO.freeboardviewLikeMinus(map);
		
	}

}
