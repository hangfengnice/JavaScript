/**
 * TypeScript 价值感受：5 个 JS 里不会报错、运行时才炸的真实场景
 *
 * 👉 把鼠标悬停在红色波浪线上，感受 TS 在编写阶段就帮你挡住了 bug
 */

// ═══════════════════════════════════════════════════════════════════════════
// 场景 1：拼写错误 —— JS 里最常见、最浪费时间的 bug
// ═══════════════════════════════════════════════════════════════════════════

interface ApiResponse {
  userName: string
  userAge: number
  isActive: boolean
}

function renderUser(res: ApiResponse) {
  // ✅ TS 立刻报错：你拼错了！是 userName 不是 username
  // JS 里只会默默返回 undefined，你盯着页面空白查半天
  // @ts-expect-error 演示：属性名拼错
  console.log(res.username) // ← 红线！Property 'username' does not exist

  // ✅ 正确写法，TS 还有自动补全
  console.log(res)
}

// ═══════════════════════════════════════════════════════════════════════════
// 场景 2：函数参数传错 —— 调用别人的函数时最容易踩坑
// ═══════════════════════════════════════════════════════════════════════════

function createOrder(productId: number, quantity: number, discount: number) {
  return { productId, quantity, total: quantity * 100 * (1 - discount) }
}

// ✅ JS 里参数顺序传反了，不会报错，但计算结果全错
// TS 虽然不能直接检测顺序（都是 number），但可以用更好的方式 ↓

// 更好的做法：用对象参数，TS 帮你检查每个字段
function createOrderSafe(params: {
  productId: number
  quantity: number
  discount: number // 0~1 之间
}) {
  return {
    productId: params.productId,
    quantity: params.quantity,
    total: params.quantity * 100 * (1 - params.discount),
  }
}

// 字段名写错立刻报错
// @ts-expect-error 演示：字段名拼错
createOrderSafe({ productId: 1, quanity: 2, discount: 0.1 })
//                                ↑ 红线！'quanity' does not exist, did you mean 'quantity'?

// ═══════════════════════════════════════════════════════════════════════════
// 场景 3：接口变了但调用方没改 —— 多人协作/长期维护的噩梦
// ═══════════════════════════════════════════════════════════════════════════

// 假设后端 V1 返回 { data: string }
// V2 改成了 { data: { list: string[], total: number } }

interface ApiV2Response {
  code: number
  data: {
    list: string[]
    total: number
  }
}

function handleResponse(res: ApiV2Response) {
  // ✅ 如果你还按 V1 的方式使用，TS 立刻报错
  // @ts-expect-error 演示：结构变了
  const items = res.data.split(',') // ← 红线！data 不是 string 了

  // ✅ 正确写法
  const items2 = res.data.list
  const total = res.data.total
}

// ═══════════════════════════════════════════════════════════════════════════
// 场景 4：处理 null/undefined —— 线上崩溃的头号元凶
// ═══════════════════════════════════════════════════════════════════════════

function getUser(
  id: number,
): { name: string; address?: { city: string } } | null {
  if (id === 0) return null
  return { name: 'Alice' } // 注意：address 是可选的，可能没有
}

const user = getUser(1)

// ✅ TS 强制你处理 null，不然直接报错
// @ts-expect-error 演示：可能为 null
console.log(user.name) // ← 红线！'user' is possibly 'null'

// ✅ 正确写法 1：if 判断（类型收窄）
if (user) {
  console.log(user.name) // ← 这里 TS 知道 user 不是 null 了

  // ✅ 嵌套可选属性也会提醒你
  // @ts-expect-error 演示：可能为 undefined
  console.log(user.address.city) // ← 红线！'address' is possibly 'undefined'

  // ✅ 正确写法：可选链
  console.log(user.address?.city)
}

// ═══════════════════════════════════════════════════════════════════════════
// 场景 5：Vue 3 组合式 API 中的真实收益
// ═══════════════════════════════════════════════════════════════════════════

// 模拟 ref 和 computed 的简化类型
interface Ref<T> {
  value: T
}
function ref<T>(val: T): Ref<T> {
  return { value: val }
}
function computed<T>(getter: () => T): Ref<T> {
  return { value: getter() }
}

// 定义一个商品列表 composable
interface Product {
  id: number
  name: string
  price: number
  tags: string[]
}

function useProducts() {
  const products = ref<Product[]>([])
  const keyword = ref('')

  const filtered = computed(() =>
    products.value.filter((p) => p.name.includes(keyword.value)),
  )

  // ✅ 返回类型完全自动推断，调用方享受完整提示
  return { products, keyword, filtered }
}

// 使用时
const { products, keyword, filtered } = useProducts()

// ✅ TS 知道 products.value 是 Product[]，自动补全所有字段
products.value.forEach((p) => {
  console.log(p.name, p.price)
  // @ts-expect-error 演示：Product 没有 color 属性
  console.log(p.color) // ← 红线！
})

// ✅ TS 知道 filtered.value 也是 Product[]
const names = filtered.value.map((p) => p.name) // 自动推断为 string[]

// ✅ 赋值错误也能捕获
// @ts-expect-error 演示：类型不匹配
keyword.value = 123 // ← 红线！Type 'number' is not assignable to type 'string'

export {}
