package com.mbti.MBTI.freeboard.sevice;

import java.util.Map;

import com.mbti.MBTI.freeboard.bean.FreeBoardDTO;

public interface FreeBoardService {

	public void freeboardwrite(Map<String, String> map);

	public FreeBoardDTO freeboardview(int seq1);
	
	public String freeboardviewLikeCheck(Map<String, Object> map);

	public void freeboardviewLikeplus(Map<String, Object> map);

	public void freeboardviewLikeMinus(Map<String, Object> map);


}
