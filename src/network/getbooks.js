import {request} from "./request";

export function get_books() {
  return request({
    url: '/getbooks.php',
    responseType: 'json',
  })
}