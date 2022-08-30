package com.mbti.MBTI.FreeComment.dao;

import java.util.List;
import java.util.Map;

import com.mbti.MBTI.FreeComment.bean.FreeCommentDTO;

public interface FreeCommentDAO {

	public void commentWrite(FreeCommentDTO freeCommentDTO);

	public List<FreeCommentDTO> userComment(FreeCommentDTO freeCommentDTO);

	public void commentDelete(int fc_seqi);






	

}
