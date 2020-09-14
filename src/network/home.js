import {request} from "./request";

export function get_notice() {
  return request({
    url: '/index.php',
    responseType: 'json',
  })
}

export function get_page() {
  return request({
    url: '/getpage_number.php',
    responseType: 'json',
    params:{
    	pagesize:3
    }
  })
}
export function get_doc_list(page) {
  return request({
    url: '/get_doc_list.php',
    responseType: 'json',
    params:{
      pagesize:3,
      page
    }
  })
}

export function login(usercount,userpwd) {
  return request({
    methods:"post",
    url: '/login.php',
    headers:{"Content-Type":'application/x-www-form-urlencoded;charset=UTF-8','X-Requested-With': 'XMLHttpRequest'},
    responseType: 'json',
    data:{
      "usercount":usercount,
      "userpwd":userpwd
    },
    params:{
     "usercount":usercount,
      "userpwd":userpwd
    }
  })
}

export function get_newbook(number) {
  return request({
    url: '/get_newbook.php',
    responseType: 'json',
    params:{
      number
    }
  })
}
export function get_userchat(number) {
  return request({
    url: '/get_userchat.php',
    responseType: 'json',
    params:{
      number
    }
  })
}