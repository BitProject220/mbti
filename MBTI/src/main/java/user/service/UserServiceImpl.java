package user.service;

public class UserServiceImpl implements UserService {

	@Override
	public void write() {
		// TODO Auto-generated method stub
		
	}

	//###################유진 회원가입 이메일중복체크###################
	@Override
	public String emailCheck(String email) {
		
		 return "nonExist";
	}
	//###################유진 끝#################################

}
