import {request} from "./request";
import qs from 'qs';

export function get_user_addrees() {
	let useraccount = localStorage.getItem('useraccount');
  return request({
    url: '/get_user_addrees.php',
    responseType: 'json',
    params:{
    	useraccount
    }
  })
}
export function get_user_order() {
	let useraccount = localStorage.getItem('useraccount');
  return request({
    url: '/get_user_orde.php',
    responseType: 'json',
    params:{
    	useraccount
    }
  })
}

export function updata_user_info(name,sex,area,sign,birthday) {
  let useraccount = localStorage.getItem('useraccount');
  return request({
    url: '/updata_user_info.php',
    responseType: 'json',
    params:{
      useraccount,name,sex,sign,area,birthday

    }
  })
}

export function add_receiver_addrees(receiver,postcode,telephone,area,addreesDetal) {
  let useraccount = localStorage.getItem('useraccount');
  return request({
    url: '/add_receiver_addrees.php',
    responseType: 'json',
    params:{
     useraccount,receiver,postcode,telephone,area,addreesDetal

    }
  })
}

export function upload_user_face(form_data){
  let useraccount = localStorage.getItem('useraccount');
  let userid = localStorage.getItem('userid');
  return request({
    method:'post',
    url: '/upload_user_face.php',
    responseType: 'json',
    headers:{'Content-Type':'multipart/form-data'},
    params:{
     userid,useraccount 
    },
    data:form_data
  })
}