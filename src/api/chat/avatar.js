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

export async function getAvatarUrl(uid, model) {
  let res
  try {
    if (model === 1) {
      res = (await
        axios.get('/manager/bliveExtra/getDanmuMedalAnchorInfo',
          {
            params: {
              ruid: uid
            }
          })).data
      return processAvatarUrl(res.data)
    } else {
      res = (await
        axios.get('/api/avatar_url',
          {
            params: {
              uid: uid
            }
          })).data
      return res.avatarUrl
    }
  }
  catch {
    return DEFAULT_AVATAR_URL
  }
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
