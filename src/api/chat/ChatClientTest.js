import { getUuid4Hex } from '@/utils'
import * as constants from '@/components/ChatRenderer/constants'
import * as chat from '.'

const NAMES = [
  '轴芯', '大喆', '好星人', '特别特别特别长的名字', '短', '名字_name'
]

const CONTENTS = [
  '特别特别特别特别特别特别特别特别特别特别特别特别长的一句话', 'kksk', '8888888888', '888888888888888888888888888888', '老板大气，老板身体健康', '呆子来咯', 'laile'
]

const AUTHOR_TYPES = [
  {weight: 10, value: constants.AUTHRO_TYPE_NORMAL},
  {weight: 5, value: constants.AUTHRO_TYPE_MEMBER},
  {weight: 2, value: constants.AUTHRO_TYPE_ADMIN},
  {weight: 1, value: constants.AUTHRO_TYPE_OWNER}
]

function randGuardInfo () {
  let authorType = randomChoose(AUTHOR_TYPES)
  let privilegeType
  if (authorType === constants.AUTHRO_TYPE_MEMBER || authorType === constants.AUTHRO_TYPE_ADMIN) {
    privilegeType = randInt(1, 3)
  } else {
    privilegeType = 0
  }
  return {authorType, privilegeType}
}

const GIFT_INFO_LIST = [
  {giftName: 'B坷垃', totalCoin: 9900},
  {giftName: '礼花', totalCoin: 28000},
  {giftName: '花式夸夸', totalCoin: 39000},
  {giftName: '天空之翼', totalCoin: 100000},
  {giftName: '摩天大楼', totalCoin: 450000},
  {giftName: '小电视飞船', totalCoin: 1245000}
]

const SC_PRICES = [
  30, 50, 100, 200, 500, 1000
]

const MESSAGE_GENERATORS = [
  // 文字
  {
    weight: 20,
    value() {
      return {
        type: constants.MESSAGE_TYPE_TEXT,
        message: {
          ...randGuardInfo(),
          avatarUrl: chat.DEFAULT_AVATAR_URL,
          timestamp: new Date().getTime() / 1000,
          authorName: randomChoose(NAMES),
          content: randomChoose(CONTENTS),
          isGiftDanmaku: randInt(1, 10) <= 1,
          authorLevel: randInt(0, 60),
          isNewbie: randInt(1, 10) <= 9,
          isMobileVerified: randInt(1, 10) <= 9,
          medalLevel: randInt(0, 40),
          id: getUuid4Hex(),
          translation: ''
        }
      }
    }
  },
  // 礼物
  {
    weight: 1,
    value() {
      return {
        type: constants.MESSAGE_TYPE_GIFT,
        message: {
          ...randomChoose(GIFT_INFO_LIST),
          id: getUuid4Hex(),
          avatarUrl: chat.DEFAULT_AVATAR_URL,
          timestamp: new Date().getTime() / 1000,
          authorName: randomChoose(NAMES),
          num: 1
        }
      }
    }
  },
  // SC
  {
    weight: 3,
    value() {
      return {
        type: constants.MESSAGE_TYPE_SUPER_CHAT,
        message: {
          id: getUuid4Hex(),
          avatarUrl: chat.DEFAULT_AVATAR_URL,
          timestamp: new Date().getTime() / 1000,
          authorName: randomChoose(NAMES),
          price: randomChoose(SC_PRICES),
          content: randomChoose(CONTENTS),
          translation: ''
        }
      }
    }
  },
  // 新舰长
  {
    weight: 8,
    value() {
      return {
        type: constants.MESSAGE_TYPE_MEMBER,
        message: {
          id: getUuid4Hex(),
          avatarUrl: chat.DEFAULT_AVATAR_URL,
          timestamp: new Date().getTime() / 1000,
          authorName: randomChoose(NAMES),
          privilegeType: randInt(1, 3)
        }
      }
    }
  }
]

function randomChoose(nodes) {
  if (nodes.length === 0) {
    return null
  }
  for (let node of nodes) {
    if (node.weight === undefined || node.value === undefined) {
      return nodes[randInt(0, nodes.length - 1)]
    }
  }

  let totalWeight = 0
  for (let node of nodes) {
    totalWeight += node.weight
  }
  let remainWeight = randInt(1, totalWeight)
  for (let node of nodes) {
    remainWeight -= node.weight
    if (remainWeight > 0) {
      continue
    }
    if (node.value instanceof Array) {
      return randomChoose(node.value)
    }
    return node.value
  }
  return null
}

function randInt(min, max) {
  return Math.floor(min + ((max - min + 1) * Math.random()))
}

export default class ChatClientTest {
  constructor() {
    this.onAddText = null
    this.onAddGift = null
    this.onAddMember = null
    this.onAddSuperChat = null
    this.onDelSuperChat = null
    this.onUpdateTranslation = null

    this.timerId = null
  }

  start () {
    // 随机生成弹幕
    this.refreshTimer()
    // 展示用固定弹幕
    // setTimeout(() => { this.showExample() }, 3000)
  }

  stop() {
    if (this.timerId) {
      window.clearTimeout(this.timerId)
      this.timerId = null
    }
  }

  showExample () {
    const simpleUserText = {
      authorType: constants.AUTHRO_TYPE_NORMAL,
      privilegeType: 0,
      avatarUrl: avatar.DEFAULT_AVATAR_URL,
      timestamp: new Date().getTime() / 1000,
      authorName: randomChoose(NAMES),
      content: '普通观众的一条弹幕',
      isGiftDanmaku: false,
      authorLevel: randInt(0, 60),
      isNewbie: randInt(1, 10) <= 9,
      isMobileVerified: randInt(1, 10) <= 9,
      medalLevel: randInt(0, 40),
      id: getUuid4Hex(),
      translation: ''
    }
    this.onAddText(simpleUserText)
    const member3UserText = {
      authorType: constants.AUTHRO_TYPE_MEMBER,
      privilegeType: 3,
      avatarUrl: avatar.DEFAULT_AVATAR_URL,
      timestamp: new Date().getTime() / 1000,
      authorName: randomChoose(NAMES),
      content: '舰长的一条弹幕',
      isGiftDanmaku: false,
      authorLevel: randInt(0, 60),
      isNewbie: randInt(1, 10) <= 9,
      isMobileVerified: randInt(1, 10) <= 9,
      medalLevel: randInt(0, 40),
      id: getUuid4Hex(),
      translation: ''
    }
    this.onAddText(member3UserText)
    const member2UserText = {
      authorType: constants.AUTHRO_TYPE_MEMBER,
      privilegeType: 2,
      avatarUrl: avatar.DEFAULT_AVATAR_URL,
      timestamp: new Date().getTime() / 1000,
      authorName: randomChoose(NAMES),
      content: '提督的一条弹幕',
      isGiftDanmaku: false,
      authorLevel: randInt(0, 60),
      isNewbie: randInt(1, 10) <= 9,
      isMobileVerified: randInt(1, 10) <= 9,
      medalLevel: randInt(0, 40),
      id: getUuid4Hex(),
      translation: ''
    }
    this.onAddText(member2UserText)
    const member1UserText = {
      authorType: constants.AUTHRO_TYPE_MEMBER,
      privilegeType: 1,
      avatarUrl: avatar.DEFAULT_AVATAR_URL,
      timestamp: new Date().getTime() / 1000,
      authorName: randomChoose(NAMES),
      content: '总督的一条弹幕',
      isGiftDanmaku: false,
      authorLevel: randInt(0, 60),
      isNewbie: randInt(1, 10) <= 9,
      isMobileVerified: randInt(1, 10) <= 9,
      medalLevel: randInt(0, 40),
      id: getUuid4Hex(),
      translation: ''
    }
    this.onAddText(member1UserText)
    const adminUserText = {
      authorType: constants.AUTHRO_TYPE_ADMIN,
      privilegeType: 3,
      avatarUrl: avatar.DEFAULT_AVATAR_URL,
      timestamp: new Date().getTime() / 1000,
      authorName: randomChoose(NAMES),
      content: '房管的一条弹幕',
      isGiftDanmaku: false,
      authorLevel: randInt(0, 60),
      isNewbie: randInt(1, 10) <= 9,
      isMobileVerified: randInt(1, 10) <= 9,
      medalLevel: randInt(0, 40),
      id: getUuid4Hex(),
      translation: ''
    }
    this.onAddText(adminUserText)
    const neoMember = {
      id: getUuid4Hex(),
      avatarUrl: avatar.DEFAULT_AVATAR_URL,
      timestamp: new Date().getTime() / 1000,
      authorName: randomChoose(NAMES),
      privilegeType: randInt(1, 3)
    }
    this.onAddMember(neoMember)
    const gift = {
      id: getUuid4Hex(),
      ...randomChoose(GIFT_INFO_LIST),
      avatarUrl: avatar.DEFAULT_AVATAR_URL,
      timestamp: new Date().getTime() / 1000,
      authorName: randomChoose(NAMES),
      num: 1
    }
    this.onAddGift(gift)
    const sc = {
      id: getUuid4Hex(),
      avatarUrl: avatar.DEFAULT_AVATAR_URL,
      timestamp: new Date().getTime() / 1000,
      authorName: '送礼用户',
      price: 99999,
      content: '这是一条醒目留言'
    }
    this.onAddSuperChat(sc)
  }

  refreshTimer() {
    // 模仿B站的消息间隔模式
    let sleepTime
    if (randInt(0, 4) == 0) {
      sleepTime = randInt(1000, 2000)
    } else {
      sleepTime = randInt(0, 400)
    }
    this.timerId = window.setTimeout(this.onTimeout.bind(this), sleepTime)
  }

  onTimeout() {
    this.refreshTimer()

    let { type, message } = randomChoose(MESSAGE_GENERATORS)()
    switch (type) {
    case constants.MESSAGE_TYPE_TEXT:
      this.onAddText(message)
      break
    case constants.MESSAGE_TYPE_GIFT:
      this.onAddGift(message)
      break
    case constants.MESSAGE_TYPE_MEMBER:
      this.onAddMember(message)
      break
    case constants.MESSAGE_TYPE_SUPER_CHAT:
      this.onAddSuperChat(message)
      break
    }
  }
}
