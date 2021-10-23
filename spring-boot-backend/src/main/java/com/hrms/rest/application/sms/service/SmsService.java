package com.hrms.rest.application.sms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.hrms.rest.application.sms.request.SmsRequest;
import com.hrms.rest.application.sms.sender.SmsSender;
import com.hrms.rest.application.sms.sender.TwilioSmsSender;

@Service
public class SmsService {
	  private final SmsSender smsSender;

	    @Autowired
	    public SmsService(@Qualifier("twilio") TwilioSmsSender smsSender) {
	        this.smsSender = smsSender;
	    }

	    public void sendSms(SmsRequest smsRequest) {
	        smsSender.sendSms(smsRequest);
	    }
}
