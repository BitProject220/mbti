package com.mbti.MBTI.user.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mbti.MBTI.user.bean.UserDTO;
import com.mbti.MBTI.user.dao.UserDAO;

@Service
public class UserServiceImpl implements UserService{
	
	 @Autowired(required = false)
	 private UserDAO userDAO;
		
//	 @Autowired
//	 public UserServiceImpl(UserDAO userDAO) {
//		 this.userDAO = userDAO;
//
//	 }
	 
	@Override
	public void write(UserDTO userDTO) {
		userDAO.write(userDTO);
	}
	
	//###################유진 회원가입 이메일중복체크###################
	@Override
	public String emailCheck(String email) {
		UserDTO userDTO = userDAO.emailCheck(email); 
		if(userDTO == null) {
		 return "nonExist";
		}
		else {
			return "exist";
		}
		
	}

	@Override
	public String nameCheck(String name) {
		UserDTO userDTO = userDAO.nameCheck(name);
		if(userDTO == null) {
			 return "nonExist";
		}
			else return "exist";
	}
	
	//###################유진 끝#################################

	@Override
	public UserDTO loginCheck(Map<String, String> map) {
		UserDTO userDTO = userDAO.loginCheck(map);
		return userDTO;
	}

	@Override
	public UserDTO findPasswordEmailCheck(Map<String, String> map) {
		UserDTO userDTO = userDAO.findPasswordEmailCheck(map);
		return userDTO;
	}

//	@Override
//	public String getAccessToken(String code) {
//		String access_Token = "";
//		String refresh_Token = "";
//		String reqURL = "https://kauth.kakao.com/oauth/token";
//		try {
//			URL url = new URL(reqURL);
//			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//			
//			conn.setRequestMethod("POST");
//			conn.setDoOutput(true);
//			
//			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
//			StringBuilder sb = new StringBuilder();
//			sb.append("grant_type=authorization_code");
//			sb.append("&client_id=99d19c4d787174d74fec051d2035c26e"); //본인이 발급받은 key
//			sb.append("&redirect_uri=http://localhost:8080/semiproject/user/userKakaoLoginForm"); //본인이 설정한 주소
//			sb.append("&code=" + code);
//			bw.write(sb.toString());
//			bw.flush();
//			
//			//코드가 200이면 성공
//			int responseCode = conn.getResponseCode();
//			System.out.println("responseCode : " + responseCode);
//			
//			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
//			String line = "";
//			String result = "";
//			
//			
//			while ((line = br.readLine()) != null) {
//				result += line;
//			}
//			
//			
//			//Gson 라이브러리에 포함된 클래스로 JSON파싱 객체 생성
//			JsonParser parser = new JsonParser();
//			JsonElement element = parser.parse(result);
//			
//			
//			access_Token = element.getAsJsonObject().get("access_token").getAsString();
//			refresh_Token = element.getAsJsonObject().get("refresh_token").getAsString();
//			
//			
//			//System.out.println("access_token : " + access_Token); //찍히는지 확인
//			//System.out.println("refresh_token : " + refresh_Token); //찍히는지 확인
//			
//			
//			br.close();
//			bw.close();
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//		return access_Token; 
//	}
//
//	@Override
//	public UserDTO getUserInfo(String access_Token) {
//		HashMap<String, Object> userInfo = new HashMap<String, Object>(); //HashMap안에 유저 정보를 담을것이다.
//		
//		String reqURL = "https://kapi.kakao.com/v2/user/me"; //카카오에서 제공하는 페이지로 그대로 쓰시면됩니다. 
//		
//		 //access_token을 이용하여 사용자 정보 조회
//		try {
//			URL url = new URL(reqURL);
//			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//			
//			conn.setRequestMethod("POST");
//		    	conn.setDoOutput(true);
//			conn.setRequestProperty("Authorization", "Bearer " + access_Token);
//			
//			//결과 코드가 200이라면 성공
//			int responseCode = conn.getResponseCode();
//			System.out.println("responseCode : " + responseCode); //200찍히나 확인
//			
//			//요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
//			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
//			String line = "";
//			String result = "";
//			
//			while ((line = br.readLine()) != null) {
//				result += line;
//			}
//			
//			
//			//Gson 라이브러리로 JSON파싱
//			JsonParser parser = new JsonParser();
//			JsonElement element = parser.parse(result);
//			
//			JsonObject properties = element.getAsJsonObject().get("properties").getAsJsonObject();
//			JsonObject kakao_account = element.getAsJsonObject().get("kakao_account").getAsJsonObject();
//			
//			//name은 개인정보 기본 제공항목에 해당하지 않아 닉네임이 네임으로 대체됨(220713)
//			String nickname = properties.getAsJsonObject().get("nickname").getAsString();
//			String email = kakao_account.getAsJsonObject().get("email").getAsString();		
//			
//			//카카오 회원에 대한 어드민 삭제 기능 구현을 위해 카카오 아이디 저장 추가(220716)
//			String id = element.getAsJsonObject().get("id").getAsString();			
//			
//			userInfo.put("nickname", nickname); //HASHMap 안에 답기
//			userInfo.put("email", email);
//			// 카카오 회원에 대한 어드민 삭제 기능 구현을 위해 카카오 아이디 저장 추가(220716)
//			userInfo.put("kakaoId", id);
//			
//		} catch (IOException e) {
//			e.printStackTrace();
//		}			
//
//		UserDTO result = userDAO.findkakao(userInfo); //userInfo를 가지고 DAO에 가서 유저정보 저장할겁니다
//		//String user_social = result.getUser_social(); //연수 추가
//		// 위 코드는 먼저 정보가 저장되있는지 확인하는 코드.
//		
//		System.out.println("S:" + result);
//		
//		//@@@@@@@@@@@ 연수 : 기존 이메일 가입 여부에 따른 카카오 연동 가입 회원 정보 입력 방식 변경(220713) @@@@@@@@@@@
//		//미가입자 : 카카오에서 받아온 정보를 넣는다
//		if(result==null) {
//			// result가 null이면 정보가 저장이 안되있는거므로 정보를 저장.
//			userDAO.kakaoinsert(userInfo);
//			// 위 코드가 정보를 저장하기 위해 Repository로 보내는 코드임.
//			return userDAO.findkakao(userInfo);
//			// 위 코드는 정보 저장 후 컨트롤러에 정보를 보내는 코드임.
//			// result를 리턴으로 보내면 null이 리턴되므로 위 코드를 사용.
//			//기존 이메일 가입자 : 기존 정보를 업데이트(id 유지)
//			// && result.getUser_social().equals("X") 
//		}else if(result!=null){
//			userDAO.updateBykakao(userInfo); //update or delete+insert
//			return userDAO.findkakao(userInfo);	
//			//기존 이메일 가입자&1회 소셜 로그인 성공 후 정보 변경이 완료된 자
//		}else {	
//			// 정보가 이미 있기 때문에 result를 리턴함.
//			return result;				
//		}
//	}
	
	
}
