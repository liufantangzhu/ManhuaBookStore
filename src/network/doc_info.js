import {request} from "./request";

export function get_doc_info(docid) {
  return request({
    url: '/getdocinfo.php',
    responseType: 'json',
    params:{
    	getdocid:docid,
    }
  })
}

export function get_doc_comment(docid) {
  return request({
    url: '/getdoccomment.php',
    responseType: 'json',
    params:{
    	getdocid:docid,
    }
  })
}

export function send_comment(docid,comment,userid,useraccount) {

  return request({
    url: '/add_doc_comment.php',
    responseType: 'json',
    params:{
      docid,comment,userid,useraccount
    }
  })
}