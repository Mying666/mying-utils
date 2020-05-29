/**
 * 获取Url参数中指定name的值
 * @param name 参数名称
 * @returns {string}
 */
export function getUrlParam(name: string): string {
  const re = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let value = ''
  const arrHash = window.location.hash.split('?')
  const arrSearch = window.location.search.substr(1).split('?')

  arrHash.shift()
  const arr = arrSearch.concat(arrHash)

  for (let i = 0; i < arr.length; i++) {
    const r = arr[i].match(re)
    if (r !== null && r[2]) {
      value = r[2]
      break
    }
  }
  return value
}
