package com.mbti.MBTI.FreeComment.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbti.MBTI.FreeComment.bean.FreeCommentDTO;
import com.mbti.MBTI.FreeComment.dao.FreeCommentDAO;
import com.mbti.MBTI.user.dao.UserDAO;

@Service
public class FreeCommentServiceImpl implements FreeCommentService {

	@Autowired(required = false)
	private FreeCommentDAO freeCommentDAO;

	@Override
	public void commentWrite(FreeCommentDTO freeCommentDTO) {
		System.out.println("freeCommentDTO values: "+freeCommentDTO);
		freeCommentDAO.commentWrite(freeCommentDTO);

	}

	@Override
	public List<FreeCommentDTO> userComment(FreeCommentDTO freeCommentDTO) {
		System.out.println("데이더확인"+ freeCommentDTO);
		return freeCommentDAO.userComment(freeCommentDTO);

	}

}
