import {request} from "./request";

export function get_shopcart_info() {
	let useraccount = localStorage.getItem('useraccount');
  return request({
    url: '/get_shopcart_info.php',
    responseType: 'json',
    params:{
    	useraccount
    }
  })
}

export function add_cart(id,number) {
	let useraccount = localStorage.getItem('useraccount');
  return request({
    url: '/add_cart.php',
    responseType: 'json',
    params:{
    	useraccount,id,number
    }
  })
}

export function delete_cart(id) {
	let useraccount = localStorage.getItem('useraccount');
  return request({
    url: '/delete_cart.php',
    responseType: 'json',
    params:{
    	useraccount,id
    }
  })
}

export function changeNumber_cart(id,number) {
	let useraccount = localStorage.getItem('useraccount');
  return request({
    url: '/changeNumber_cart.php',
    responseType: 'json',
    params:{
    	useraccount,id,number
    }
  })
}