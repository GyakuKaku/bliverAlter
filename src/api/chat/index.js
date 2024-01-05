import axios from 'axios'

export const FATAL_ERROR_TYPE_AUTH_CODE_ERROR = 1
export const FATAL_ERROR_TYPE_ROOM_ERROR = 8

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
  if (avatarUrl.indexOf("@") > -1) {
    return avatarUrl
  }
  // 缩小图片加快传输
  if (!avatarUrl.endsWith('noface.gif') && !avatarUrl.endsWith('noface.png')) {
    avatarUrl += '@42w_42h'
  }
  return avatarUrl
}

export function processAvatarUrl_web(avatarUrl) {
  if (avatarUrl.indexOf('http') < 0) {
    avatarUrl = 'http:' + avatarUrl
  }
  if (avatarUrl.indexOf("@") > -1) {
    return avatarUrl
  }
  // 缩小图片加快传输
  if (!avatarUrl.endsWith('noface.gif') && !avatarUrl.endsWith('noface.png') && !avatarUrl.endsWith('noface.png')) {
    avatarUrl += '@42w_42h_!web-avatar-nav.avif'
  }
  return avatarUrl
}

export async function getAvatarUrl(uid) {
  let res
  try {
    res = (await axios.get('/manager/bliveExtra/v2/getAvatarUrl', {params: { uid: uid, temp: "0101" }})).data
    if (res.success) {
      if (res.data.avatarUrl.indexOf("noface") > -1) {
        errorLog('1', uid + '获取的是默认头像')
      }
      return processAvatarUrl(res.data.avatarUrl)
    } else {
      errorLog('1', JSON.stringify({uid: uid, res: JSON.stringify(res)}))
      return DEFAULT_AVATAR_URL
    }
  } catch (e) {
    if (e && e.response) {
      // 请求已发出，但服务器返回状态码不在 2xx 范围内
      errorLog('0', JSON.stringify(e.response))
    } else if (e) {
      // 请求未发出，或者没有收到响应
      errorLog('0', JSON.stringify(e))
    } else {
      errorLog('0', '请求出错且没有异常')
    }
    return DEFAULT_AVATAR_URL
  }
}

export async function getPicBase64ByUrl(imageUrl, authorName) {
  let res
  try {
    res = (await axios.get('/manager/bliveExtra/getPicBase64ByUrl', {params: { authorName: authorName, imageUrl: imageUrl }})).data
    if (res.success) {
      return res.data.avatarUrl
    } else {
      return DEFAULT_AVATAR_URL
    }
  } catch (e) {
    if (e && e.response) {
      // 请求已发出，但服务器返回状态码不在 2xx 范围内
      errorLog('2', authorName + imageUrl + JSON.stringify(e.response))
    } else if (e) {
      // 请求未发出，或者没有收到响应
      errorLog('2', authorName + imageUrl + JSON.stringify(e))
    } else {
      errorLog('2', authorName + imageUrl + '请求出错且没有异常')
    }
    return DEFAULT_AVATAR_URL
  }
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

export function errorLog(type, log) {
  try {
    const targetDate = new Date('2024-01-03T00:00:00');
    const currentDate = new Date();

    if (currentDate.getTime() < targetDate.getTime()) {
      axios.post('/manager/bliveExtra/errorLog', {
        log: type + '-' + log + '-' + window.location.href
      }).then()
    }
  } catch {}
}
