import axios from "axios";
import authHeader from "./auth-header";

const SMS_URL = "http://localhost:8080/api/send/sms";
class SmsServices {
  postSms(sms) {
    return axios.post(SMS_URL, sms, { headers: authHeader() });
  }
}

export default new SmsServices();
