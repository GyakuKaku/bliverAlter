import {getUuid4Hex} from '@/utils'
import * as constants from '@/components/ChatRenderer/constants'
import * as avatar from './avatar'

const NAMES = [
  'xfgryujk', 'Simon', 'Il Harper', 'Kinori', 'shugen', 'yuyuyzl', '3Shain', '光羊', '黑炎', 'Misty', '孤梦星影',
  'ジョナサン・ジョースター', 'ジョセフ・ジョースター', 'ディオ・ブランドー', '空條承太郎', '博丽灵梦', '雾雨魔理沙',
  'Rick Astley'
]

// const CONTENTS = [
//   '草', 'kksk', '8888888888', '888888888888888888888888888888', '老板大气，老板身体健康'
// ]

const CONTENTS = [
  '草', 'kksk', '8888888888', '888888888888888888888888888888', '老板大气，老板身体健康', '(test)'
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
          avatarUrl: avatar.DEFAULT_AVATAR_URL,
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
          avatarUrl: avatar.DEFAULT_AVATAR_URL,
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
          avatarUrl: avatar.DEFAULT_AVATAR_URL,
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
    weight: 1,
    value() {
      return {
        type: constants.MESSAGE_TYPE_MEMBER,
        message: {
          id: getUuid4Hex(),
          avatarUrl: avatar.DEFAULT_AVATAR_URL,
          timestamp: new Date().getTime() / 1000,
          authorName: randomChoose(NAMES),
          privilegeType: randInt(1, 3)
        }
      }
    }
  }
]

function randomChoose (nodes) {
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

function randInt (min, max) {
  return Math.floor(min + (max - min + 1) * Math.random())
}

export default class ChatClientTest {
  constructor () {
    this.minSleepTime = 800
    this.maxSleepTime = 1200

    this.onAddText = null
    this.onAddGift = null
    this.onAddMember = null
    this.onAddSuperChat = null
    this.onDelSuperChat = null
    this.onUpdateTranslation = null

    this.timerId = null
  }

  start () {
    this.refreshTimer()
  }

  stop () {
    if (this.timerId) {
      window.clearTimeout(this.timerId)
      this.timerId = null
    }
  }

  refreshTimer () {
    this.timerId = window.setTimeout(this.onTimeout.bind(this), randInt(this.minSleepTime, this.maxSleepTime))
  }

  onTimeout () {
    this.refreshTimer()

    let {type, message} = randomChoose(MESSAGE_GENERATORS)()
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
