package com.mbti.MBTI.freeboard.dao;

import java.util.Map;

import com.mbti.MBTI.freeboard.bean.FreeBoardDTO;
import com.mbti.MBTI.freegood.bean.FreeGoodDTO;

public interface FreeBoardDAO {

	public void freeboardwrite(Map<String, String> map);

	public FreeBoardDTO freeboardview(int seq);

	public void feeboardhit(int seq);

	public void freeboarddelete(int seq);

	public void freeboardupdate(int seq);


	public FreeGoodDTO freeboardviewLikeCheck(Map<String, Object> map);

	public void freeboardviewLikeplus(Map<String, Object> map);

	public void freeboardviewLikeMinus(Map<String, Object> map);

}
