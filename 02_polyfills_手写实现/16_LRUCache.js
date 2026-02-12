/**
 * LRU Cache (Least Recently Used Cache)
 * 最近最少使用缓存：当缓存满时，淘汰最久未使用的数据
 *
 * @example
 * const cache = new LRUCache(2)
 * cache.put(1, 1)
 * cache.put(2, 2)
 * cache.get(1)     // 1
 * cache.put(3, 3)  // 淘汰 key 2
 * cache.get(2)     // -1 (未找到)
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map() // Map 保持插入顺序
  }

  /**
   * 获取值
   * @param {number} key
   * @returns {number} 返回值，不存在返回 -1
   */
  get(key) {
    const { cache } = this

    if (!cache.has(key)) {
      return -1
    }

    // 获取值并更新为最新使用（删除后重新插入）
    const value = cache.get(key)
    cache.delete(key)
    cache.set(key, value)

    return value
  }

  /**
   * 插入或更新值
   * @param {number} key
   * @param {number} value
   */
  put(key, value) {
    const { cache } = this

    // 如果 key 已存在，先删除（更新位置）
    if (cache.has(key)) {
      cache.delete(key)
    }

    // 插入新值
    cache.set(key, value)

    // 如果超过容量，删除最久未使用的（Map 的第一个）
    if (cache.size > this.capacity) {
      const firstKey = cache.keys().next().value
      cache.delete(firstKey)
    }
  }

  /**
   * 打印当前缓存状态（用于调试）
   */
  print() {
    console.log('Cache:', Array.from(this.cache.entries()))
  }
}

// ============ 使用示例 ============

console.log('=== 示例 1: 基础操作 ===')
const cache1 = new LRUCache(2)

cache1.put(1, 1)
cache1.print() // Cache: [[1, 1]]

cache1.put(2, 2)
cache1.print() // Cache: [[1, 1], [2, 2]]

console.log(cache1.get(1)) // 1
cache1.print() // Cache: [[2, 2], [1, 1]] (1 被移到最后)

cache1.put(3, 3) // 容量满，淘汰 key 2
cache1.print() // Cache: [[1, 1], [3, 3]]

console.log(cache1.get(2)) // -1 (已被淘汰)
console.log(cache1.get(3)) // 3

console.log('\n=== 示例 2: 更新操作 ===')
const cache2 = new LRUCache(2)

cache2.put(1, 1)
cache2.put(2, 2)
cache2.print() // Cache: [[1, 1], [2, 2]]

cache2.put(1, 10) // 更新 key 1 的值
cache2.print() // Cache: [[2, 2], [1, 10]] (1 被移到最后)

cache2.put(3, 3) // 容量满，淘汰 key 2
cache2.print() // Cache: [[1, 10], [3, 3]]

console.log('\n=== 示例 3: LeetCode 146 测试用例 ===')
const cache3 = new LRUCache(2)

cache3.put(1, 1)
cache3.put(2, 2)
console.log(cache3.get(1)) // 1

cache3.put(3, 3) // 淘汰 key 2
console.log(cache3.get(2)) // -1

cache3.put(4, 4) // 淘汰 key 1
console.log(cache3.get(1)) // -1
console.log(cache3.get(3)) // 3
console.log(cache3.get(4)) // 4

console.log('\n=== 示例 4: 实际应用 - 页面缓存 ===')
const pageCache = new LRUCache(3)

pageCache.put('home', '<html>Home Page</html>')
pageCache.put('about', '<html>About Page</html>')
pageCache.put('contact', '<html>Contact Page</html>')

console.log('访问 home:', pageCache.get('home')) // <html>Home Page</html>

pageCache.put('blog', '<html>Blog Page</html>') // 淘汰 about
console.log('访问 about:', pageCache.get('about')) // -1 (已被淘汰)

pageCache.print()
// Cache: [
//   ['contact', '<html>Contact Page</html>'],
//   ['home', '<html>Home Page</html>'],
//   ['blog', '<html>Blog Page</html>']
// ]

console.log('\n=== 时间复杂度说明 ===')
console.log('get(key):  O(1) - Map 的查找、删除、插入都是 O(1)')
console.log('put(key):  O(1) - Map 的操作都是 O(1)')
console.log('空间复杂度: O(capacity)')
