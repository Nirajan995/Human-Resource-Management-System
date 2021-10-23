package com.hrms.rest.application.sms.configuration;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import org.slf4j.LoggerFactory;
import com.twilio.Twilio;

@Configuration
public class TwilioInitializer {

	private final static Logger LOGGER = LoggerFactory.getLogger(TwilioInitializer.class);

	
	@Autowired
	public TwilioInitializer(@Value("${twilioAccountSid}") String twilioAccountSid,
			@Value("${twilioAuthToken}") String twilioAuthToken) {
		Twilio.init(twilioAccountSid, twilioAuthToken);
		LOGGER.info("Twilio initialized...with account sid" + twilioAccountSid);
	}

}
