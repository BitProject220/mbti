package com.mbti.MBTI.board.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.mbti.MBTI.board.bean.FreeBoardDTO;

@Service
public interface BoardService {

	String getFreeBoardlist(String category, int pg,String searchKeyword, String sort);

}
