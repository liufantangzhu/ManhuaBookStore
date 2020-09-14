import {request} from "./request";

export function get_goods(bookid) {
  return request({
    url: '/getgoods.php',
    responseType: 'json',
    params:{
    	book_id:bookid
    }
  })
}