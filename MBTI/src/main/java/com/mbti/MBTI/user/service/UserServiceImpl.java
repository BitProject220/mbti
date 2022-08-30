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

import com.mbti.MBTI.user.bean.MbtiTypeDTO;
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
	
	@Override
	public void userUpdate(UserDTO userDTO) {
		userDAO.userUpdate(userDTO);
		
	}
	
	@Override
	public UserDTO userInfo(String email) {
		UserDTO userDTO = userDAO.userInfo(email);
		System.out.println(userDTO);
		return userDTO;
	}
	
	@Override
	public void userMbtiTypeResult(MbtiTypeDTO mbtiTypeDTO) {
		userDAO.userMbtiTypeResult(mbtiTypeDTO);
	}
	
	@Override
	public UserDTO userInfoDeleteCheck(String email) {
		UserDTO userDTO = userDAO.userInfoDeleteCheck(email);
		return userDTO;
	}
	
	@Override
	public void userInfoDelete(String email) {
		userDAO.userInfoDelete(email);
	}
	
	

	@Override
	public MbtiTypeDTO userInfoMain(String mbti_email) {
		MbtiTypeDTO mbtiTypeDTO = userDAO.userInfoMain(mbti_email);
		System.out.println(mbtiTypeDTO+"회원정보수정을 할건데 필요해~");
		return mbtiTypeDTO;
	}
	
	@Override
	public String userMbtiTypeResultCheck(String mbti_email) {
		System.out.println("있나없나 체크하는고여아아아아ㅏ아아아아아아아아아아아앙아아아아아아아아아아아아아ㅏ아앙"+mbti_email);
		MbtiTypeDTO mbtiTypeDTO = userDAO.userMbtiTypeResultCheck(mbti_email);
		if(mbtiTypeDTO == null) {
			 return "nonExist";
			}
			else {
				return "exist";
			}
	}
	
	@Override
	public void userMbtiTypeResultUpdate(MbtiTypeDTO mbtiTypeDTO) {
		userDAO.userMbtiTypeResultUpdate(mbtiTypeDTO);
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

	@Override
	public String getpassword(String email) {
		return userDAO.getpassword(email);
	}
	
	//카카오로그인
	@Override
	public String getAccessToken(String code) {
		String access_Token = "";
		String refresh_Token = "";
		String reqURL = "https://kauth.kakao.com/oauth/token";
		try {
			URL url = new URL(reqURL);
            
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			// POST 요청을 위해 기본값이 false인 setDoOutput을 true로
            
			conn.setRequestMethod("POST");
			conn.setDoOutput(true);
			// POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송
            
			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
			StringBuilder sb = new StringBuilder();
			sb.append("grant_type=authorization_code");
            
			sb.append("&client_id=d6cc8f356b4510bcb983399be19c9ec8"); //본인이 발급받은 key
			sb.append("&redirect_uri=http://localhost:8080/user/kakaoLogin"); // 본인이 설정한 주소
            
			sb.append("&code=" + code);
			bw.write(sb.toString());
			bw.flush();
            
			// 결과 코드가 200이라면 성공
			int responseCode = conn.getResponseCode();
			System.out.println("responseCode : " + responseCode);
            
			// 요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			String line = "";
			String result = "";
            
			while ((line = br.readLine()) != null) {
				result += line;
			}
			System.out.println("response body : " + result);
            
			// Gson 라이브러리에 포함된 클래스로 JSON파싱 객체 생성
			JsonParser parser = new JsonParser();
			JsonElement element = parser.parse(result);
            
			access_Token = element.getAsJsonObject().get("access_token").getAsString();
			refresh_Token = element.getAsJsonObject().get("refresh_token").getAsString();
            
			System.out.println("access_token : " + access_Token);
			System.out.println("refresh_token : " + refresh_Token);
            
			br.close();
			bw.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return access_Token;
	}
	
	//카카오로그인
	@Override
	public UserDTO getUserInfo(String access_Token) {//서비스에 사용자 정보를 요청하는 내용 생성
		//요청하는 클라이언트마다 가진 정보가 다를 수 있기에 HashMap타입으로 선언
		HashMap<String, Object> userInfo = new HashMap<String, Object>();
		String reqURL = "https://kapi.kakao.com/v2/user/me";
		try {
			URL url = new URL(reqURL);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");

			// 요청에 필요한 Header에 포함될 내용
			conn.setRequestProperty("Authorization", "Bearer " + access_Token);

			int responseCode = conn.getResponseCode();
			System.out.println("responseCode : " + responseCode);

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

			String line = "";
			String result = "";

			while ((line = br.readLine()) != null) {
				result += line;
			}
			System.out.println("response body : " + result);

			JsonParser parser = new JsonParser();
			JsonElement element = parser.parse(result);

			JsonObject properties = element.getAsJsonObject().get("properties").getAsJsonObject();
			JsonObject kakao_account = element.getAsJsonObject().get("kakao_account").getAsJsonObject();

			String nickname = properties.getAsJsonObject().get("nickname").getAsString();
			String email = kakao_account.getAsJsonObject().get("email").getAsString();
			
			userInfo.put("nickname", nickname);
			userInfo.put("email", email);

		} catch (IOException e) {
			e.printStackTrace();
		}
		// catch 아래 코드 추가.
				UserDTO result = userDAO.findkakao(userInfo);
				// 위 코드는 먼저 정보가 저장되있는지 확인하는 코드.
				System.out.println("result가 null이면 저장이 안되어있는거임:" + result);
				if(result==null) {
				// result가 null이면 정보가 저장이 안되있는거므로 정보를 저장.
					userDAO.kakaoinsert(userInfo);
					// 위 코드가 정보를 저장하기 위해 Repository로 보내는 코드임.
					return userDAO.findkakao(userInfo);
					// 위 코드는 정보 저장 후 컨트롤러에 정보를 보내는 코드임.
					//  result를 리턴으로 보내면 null이 리턴되므로 위 코드를 사용.
				} else {
					return result;
					// 정보가 이미 있기 때문에 result를 리턴함.
				}
	}
	
}
