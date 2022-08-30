package com.mbti.MBTI.freeboard.dao;

import java.util.Map;

import com.mbti.MBTI.freeboard.bean.FreeBoardDTO;

public interface FreeBoardDAO {

	public void freeboardwrite(Map<String, String> map);

	public FreeBoardDTO freeboardview(int seq1);

}
