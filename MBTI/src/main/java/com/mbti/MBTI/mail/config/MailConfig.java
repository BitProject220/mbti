package com.mbti.MBTI.mail.config;

import java.util.Properties;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
public class MailConfig {
	@Bean
	public JavaMailSender javaMailService() {
		JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
	
	    javaMailSender.setHost("smtp.gmail.com");
	    javaMailSender.setUsername("yujin980810@gmail.com");
	    javaMailSender.setPassword("qjhxszlabtbcjskt");
	
	    javaMailSender.setPort(587);
	
	    javaMailSender.setJavaMailProperties(getMailProperties());
	
	    return javaMailSender;
	}

	private Properties getMailProperties() {
	    Properties properties = new Properties();	    
	    properties.setProperty("mail.smtp.starttls.enable", "true");
	    properties.setProperty("mail.transport.protocol", "smtp");
	    properties.setProperty("mail.smtp.auth", "true");
	    properties.setProperty("mail.debug", "true");

	    return properties;
	}

}
