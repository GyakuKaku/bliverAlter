import axios from 'axios'

export const DEFAULT_AVATAR_URL = '//static.hdslb.com/images/member/noface.gif'

export function processAvatarUrl(avatarUrl) {
  // 去掉协议，兼容HTTP、HTTPS
  let m = avatarUrl.match(/(?:https?:)?(.*)/)
  if (m) {
    avatarUrl = m[1]
  }
  // 缩小图片加快传输
  if (!avatarUrl.endsWith('noface.gif')) {
    avatarUrl += '@48w_48h'
  }
  return avatarUrl
}

export async function getAvatarUrl(uid) {
  let res
  try {
    res = (await
      axios.get('http://39.105.155.193:9153/xlive/web-room/v1/index/getDanmuMedalAnchorInfo',
      {
        params: {
          ruid: uid
        }
      })).data
  } catch {
    return DEFAULT_AVATAR_URL
  }
  return processAvatarUrl(res.code === 0 ? res.data.rface : DEFAULT_AVATAR_URL)
}
// export async function getAvatarUrl(uid) {
//   let res
//   try {
//     res = (await
//       axios.get('/api/avatar_url',
//       {
//         params: {
//           uid: uid
//         }
//       })).data
//   } catch {
//     return DEFAULT_AVATAR_URL
//   }
//   return res.avatarUrl
// }
