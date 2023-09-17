import axios from 'axios'

export const FATAL_ERROR_TYPE_AUTH_CODE_ERROR = 1

export class ChatClientFatalError extends Error {
  constructor(type, message) {
    super(message)
    this.type = type
  }
}

export const DEFAULT_AVATAR_URL = '//static.hdslb.com/images/member/noface.gif?refresh'
export const DEFAULT_AVATAR_URL_LOCAL = '/static/img/icons/noface.png?refresh'

export function processAvatarUrl(avatarUrl) {
  // 去掉协议，兼容HTTP、HTTPS
  let m = avatarUrl.match(/(?:https?:)?(.*)/)
  if (m) {
    avatarUrl = m[1]
  }
  // 缩小图片加快传输
  if (!avatarUrl.endsWith('noface.gif') && !avatarUrl.endsWith('noface.png')) {
    avatarUrl += '@42w_42h'
  }
  return avatarUrl
}

export async function getAvatarUrl(uid) {
  let res
  try {
    res = (await
      axios.get('/api/avatar_url',
        {
          params: {
            uid: uid,
            temp: '20230426'
          }
        })).data
    return res.avatarUrl
  }
  catch {
    return DEFAULT_AVATAR_URL
  }
  return res.avatarUrl
}

export async function getTextEmoticons() {
  let res
  try {
    res = (await axios.get('/api/text_emoticon_mappings')).data
  } catch {
    return []
  }
  return res.textEmoticons
}
