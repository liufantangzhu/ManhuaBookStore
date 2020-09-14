import {request} from "./request";

export function get_songlist() {
  return request({
    url: '/music.php',
    responseType: 'json',
  })
}