package com.hrms.rest.application.sms.sender;

import com.hrms.rest.application.sms.request.SmsRequest;

public interface SmsSender {
	 void sendSms(SmsRequest smsRequest);
}
