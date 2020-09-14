import {request} from "./request";

export function user_register(account,password,name,sex,area,birthday,sign) {
  return request({
    url: '/user_register.php',
    responseType: 'json',
    params:{
     account,password,name,sex,area,birthday,sign

    }
  })
}