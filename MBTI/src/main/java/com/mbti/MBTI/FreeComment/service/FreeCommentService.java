package com.mbti.MBTI.FreeComment.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.mbti.MBTI.FreeComment.bean.FreeCommentDTO;

@Service
public interface FreeCommentService {

	public void commentWrite(FreeCommentDTO freeCommentDTO);

	public List<FreeCommentDTO> userComment(FreeCommentDTO freeCommentDTO);


}
