import {request} from "./request";

export function add_order(goods_id,number,addrees_id) {
	let useraccount = localStorage.getItem('useraccount');
  return request({
    url: '/add_order.php',
    responseType: 'json',
     params:{
    	useraccount,goods_id,number,addrees_id
    }
  })
}