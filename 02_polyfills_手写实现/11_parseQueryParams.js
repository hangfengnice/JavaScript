/**
 * 解析 URL 查询参数
 * @param {string} url - 完整 URL 或查询字符串
 * @returns {Object} 参数对象（重复的 key 自动合并为数组）
 *
 * @example
 * parseQueryParams('https://example.com?name=alice&age=20')
 * // { name: 'alice', age: '20' }
 *
 * parseQueryParams('?tag=js&tag=css&empty=')
 * // { tag: ['js', 'css'], empty: '' }
 */
function parseQueryParams(url) {
  const params = new URLSearchParams(url.split('#')[0])
  const result = {}

  for (const key of new Set(params.keys())) {
    const values = params.getAll(key)
    result[key] = values.length === 1 ? values[0] : values
  }

  return result
}

/**
 * 序列化对象为查询字符串
 * @param {Object} params - 参数对象
 * @returns {string} 查询字符串（不含 ?）
 *
 * @example
 * stringifyQueryParams({ name: 'alice', age: 20, tags: ['js', 'css'] })
 * // 'name=alice&age=20&tags=js&tags=css'
 */
function stringifyQueryParams(params) {
  const pairs = []

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      // 数组类型：每个值生成一个键值对
      for (const item of value) {
        pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
      }
    } else if (value !== null && value !== undefined) {
      pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    }
  }

  return pairs.join('&')
}

// ============ 使用示例 ============

// 1. 基础解析
console.log(parseQueryParams('https://example.com?name=alice&age=20'))
// { name: 'alice', age: '20' }

// 2. 重复参数（自动合并为数组）
console.log(parseQueryParams('?tag=js&tag=css&tag=html'))
// { tag: ['js', 'css', 'html'] }

// 3. 特殊字符自动解码
console.log(parseQueryParams('?name=张三&msg=hello%20world'))
// { name: '张三', msg: 'hello world' }

// 4. 处理 hash 和空值
console.log(parseQueryParams('https://example.com?q=search&page=1#section'))
// { q: 'search', page: '1' }

console.log(parseQueryParams('?empty=&key'))
// { empty: '', key: '' }

// 5. 序列化对象
console.log(
  stringifyQueryParams({ name: 'alice', age: 20, tags: ['js', 'css'] }),
)
// 'name=alice&age=20&tags=js&tags=css'

// 6. 完整往返转换
const url = 'https://api.com?sort=date&filter=active&filter=new'
const params = parseQueryParams(url)
console.log(params)
// { sort: 'date', filter: ['active', 'new'] }

const queryString = stringifyQueryParams(params)
console.log(queryString)
