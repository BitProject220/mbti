package com.mbti.MBTI.freeboard.sevice;

import java.util.Map;

import com.mbti.MBTI.freeboard.bean.FreeBoardDTO;

public interface FreeBoardService {

	public void freeboardwrite(Map<String, String> map);

	public FreeBoardDTO freeboardview(int seq);

	public void freeboarddelete(int seq);

	public void freeboardupdate(int seq);



}
