package com.mbti.MBTI.freeboard.dao;

import java.util.Map;

import com.mbti.MBTI.freeboard.bean.FreeBoardDTO;

public interface FreeBoardDAO {

	void freeboardwrite(Map<String, String> map);

}
