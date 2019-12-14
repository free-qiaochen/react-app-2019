/**
 *
 * @param {*} str
 * 传入'a=b&c=d' => {a: 'b', c: 'd'}
 */
export const formatSearch = function (str) {
  let o = {}
  let reg = /(\w+)=(\w+)/gi
  let match
  while ((match = reg.exec(str))) {
    o[match[1]] = match[2]
  }
  return o
}


/**
 *
 * @param {*} data
 * '1' => 'string'  1 => 'number'
 */
export function getType (data) { // 类型判断，返回字符串
  const reg = /\s(\w+)\]/g
  const result = reg.exec(Object.prototype.toString.call(data))
  return result && result[1] ? result[1].toLowerCase() : ''
}

/**
 * 设置html字体大小
 */
export const setFontSize = function () {
  function getWdith () {
    let myWidth = 0
    if (typeof (window.innerWidth) === 'number') {
      myWidth = window.innerWidth
    } else if (document.documentElement && (document.documentElement.clientWidth)) {
      myWidth = document.documentElement.clientWidth
    } else if (document.body && (document.body.clientWidth)) {
      myWidth = document.body.clientWidth
    }
    return parseInt(myWidth)
  }
  
  let screenWidth = window.screen.width > getWdith() ? getWdith() : window.screen.width
  
  if (screenWidth >= 1024) {
    screenWidth = 1024
  }
  document.documentElement.style.fontSize = screenWidth / (375 / 40) + 'px'
  window.addEventListener('resize', () => {
    let cw = document.documentElement.clientWidth
    document.documentElement.style.fontSize = cw / (375 / 40) + 'px'
  })
}


/**
 * 得到一个小数.前的数据
 */
export function dealNumBefore (item) {
  let str = item + '';
  return parseInt(str.split('.'));
}

/**
 * 得到一个小数.后的数据
 */
export function dealNumAfter (item) {
  let str = item + '';
  return '.' + str.substr(str.indexOf(".") + 1, 2);
}


const s4 = function () {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function uuid () {
  return (s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4());
}

/**
 * 生成模拟的设备ID
 */
export function setUUID () {
  if (window.localStorage.getItem('uuid')) {
    return
  }
  window.localStorage.setItem('uuid', uuid())
}
