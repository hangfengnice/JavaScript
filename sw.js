const queue = new Set()
const p = Promise.resolve()

let isFlushing = false
function queueJob(job) {
  queue.add(job)
  if (isFlushing) return
  isFlushing = true
  p.then(() => {
    queue.forEach((fn) => fn())
  }).finally(() => {
    isFlushing = false
    queue.clear()
  })
}

const { effect, ref, reactive } = VueReactivity

function createRenderer(options) {
  const {
    createElement,
    insert,
    setElementText,
    createText,
    setText,
    patchProps,
    unmount,
  } = options
  function render(vnode, container) {
    if (vnode) {
      patch(container._vnode, vnode, container)
    } else {
      if (container._vnode) {
        unmount(container._vnode)
      }
    }
    container._vnode = vnode
  }
  return {
    render,
  }

  function patch(n1, n2, container, anchor) {
    if (n1 && n1.type !== n2.type) {
      unmount(n1)
      n1 = null
    }
    const { type } = n2
    if (typeof type === 'string') {
      if (!n1) {
        mountElement(n2, container, anchor)
      } else {
        patchElement(n1, n2)
      }
    } else if (type === Text) {
      if (!n1) {
        const el = (n2.el = createText(n2.children))
        insert(el, container)
      } else {
        const el = (n2.el = n1.el)
        if (n2.children !== n1.children) {
          setText(el, n2.children)
        }
      }
    } else if (type === Fragment) {
      if (!n1) {
        n2.children.forEach((c) => patch(null, c, container))
      } else {
        patchChildren(n1, n2, container)
      }
    } else if (typeof type === 'object') {
      if (!n1) {
        mountComponent(n2, container, anchor)
      } else {
        patchComponent(n1, n2, anchor)
      }
    }
  }
  function mountElement(vnode, container, anchor) {
    const el = (vnode.el = createElement(vnode.type))

    if (typeof vnode.children === 'string') {
      setElementText(el, vnode.children)
    } else if (Array.isArray(vnode.children)) {
      vnode.children.forEach((child) => {
        patch(null, child, el)
      })
    }

    if (vnode.props) {
      for (const key in vnode.props) {
        const value = vnode.props[key]
        patchProps(el, key, null, value)
      }
    }

    insert(el, container, anchor)
  }
  function patchElement(n1, n2) {
    const el = (n2.el = n1.el)
    const oldProps = n1.props
    const newProps = n2.props

    for (const key in newProps) {
      if (newProps[key] !== oldProps[key]) {
        patchProps(el, key, oldProps[key], newProps[key])
      }
    }
    for (const key in oldProps) {
      if (!(key in newProps)) {
        patchProps(el, key, oldProps[key], null)
      }
    }
    patchChildren(n1, n2, el)
  }
  function patchChildren(n1, n2, container) {
    if (typeof n2.children === 'string') {
      if (Array.isArray(n1.children)) {
        n1.children.forEach((c) => unmount(c))
      }
      setElementText(container, n2.children)
    } else if (Array.isArray(n2.children)) {
      if (Array.isArray(n1.children)) {
        // patchKeyedChildren(n1, n2, container)
        const oldChildren = n1.children
        const newChildren = n2.children

        let lastIndex = 0
        for (let i = 0; i < newChildren.length; i++) {
          const newVnode = newChildren[i]
          let j = 0
          let find = false

          for (; j < oldChildren.length; j++) {
            const oldVnode = oldChildren[j]

            if (newVnode.key === oldVnode.key) {
              find = true
              patch(oldVnode, newVnode, container)

              if (j < lastIndex) {
                const prevVnode = newChildren[i - 1]
                if (prevVnode) {
                  const anchor = prevVnode.el.nextSiblind

                  insert(newVnode.el, container, anchor)
                }
              } else {
                lastIndex = j
              }
              break
            }
          }
          if (!find) {
            const prevVnode = newChildren[i - 1]
            let anchor
            if (prevVnode) {
              anchor = prevVnode.el.nextSiblind
            } else {
              anchor = container.firstChild
            }
            patch(null, newVnode, container, anchor)
          }
        }

        for (let i = 0; i < oldChildren.length; i++) {
          const oldVnode = oldChildren[i]

          const has = newChildren.find((vnode) => vnode.key === oldVnode.key)

          if (!has) {
            unmount(oldVnode)
          }
        }
      } else {
        setElementText(container, '')
        n2.children.forEach((c) => patch(null, c, container))
      }
    } else {
      if (Array.isArray(n1.children)) {
        n1.children.forEach((c) => unmount(c))
      } else if (typeof n1.children === 'string') {
        setElementText(container, '')
      }
    }
  }

  function mountComponent(vnode, container, anchor) {
    const componentOptions = vnode.type
    const { render, data } = componentOptions
    const state = reactive(data())

    const instance = {
      state,
      isMounted: false,
      subtree: null,
    }

    vnode.component = instance

    effect(
      () => {
        const subtree = render.call(state, state)

        if (!instance.isMounted) {
          patch(null, subtree, container, anchor)
          instance.isMounted = true
        } else {
          patch(instance.subtree, subtree, container, anchor)
        }
        instance.subtree = subtree
      },
      {
        scheduler: queueJob,
      }
    )
  }

  // function patchKeyedChildren(n1, n2, container) {
  //   const oldChildren = n1.children
  //   const newChildren = n2.children

  //   let oldStartIdx = 0
  //   let oldEndIdx = oldChildren.length - 1
  //   let newStartIdx = 0
  //   let newEndIdx = newChildren.length - 1

  //   let oldStartVNode = oldChildren[oldStartIdx]
  //   let oldEndVNode = oldChildren[oldEndIdx]

  //   let newStartVNode = newChildren[newStartIdx]
  //   let newEndVNode = newChildren[newEndIdx]

  //   // if (oldStartVNode.key === newStartVNode.key) {

  //   // } else if () {

  //   // } else if () {

  //   // } else if () {

  //   // }
  // }
}
function shouldSetAsProps(el, key, value) {
  if (key === 'form' && el.tagName === 'INPUT') {
    return false
  }
  return key in el
}
const renderer = createRenderer({
  createElement(tag) {
    return document.createElement(tag)
  },
  setElementText(el, text) {
    el.textContent = text
  },
  insert(el, parent, anchor = null) {
    parent.insertBefore(el, anchor)
  },
  createText(text) {
    return document.createTextNode(text)
  },
  setText(el, text) {
    el.nodeValue = text
  },
  patchProps(el, key, prevValue, nextValue) {
    if (/^on/.test(key)) {
      let invokers = el._vei || (el._vei = {})
      let invoker = invokers[key]
      const name = key.slice(2).toLowerCase()
      if (nextValue) {
        if (!invoker) {
          invoker = el._vei[key] = (e) => {
            if (e.timeStamp < invoker.attached) return
            if (Array.isArray(invoker.value)) {
              invoker.value.forEach((fn) => fn(e))
            } else {
              invoker.value(e)
            }
          }
          invoker.value = nextValue
          invoker.attached = performance.now()
          el.addEventListener(name, invoker)
        } else {
          invoker.value = nextValue
        }
      } else if (invoker) {
        el.removeEventListener(name, invoker)
      }
    } else if (key === 'class') {
      el.className = nextValue || ''
    } else if (shouldSetAsProps(el, key, nextValue)) {
      const type = typeof el[key]

      if (type === 'boolean' && value === '') {
        el[key] = true
      } else {
        el[key] = nextValue
      }
    } else {
      el.setAttribute(key, nextValue)
    }
  },
  unmount(vnode) {
    if (vnode.type === Fragment) {
      return vnode.children.forEach((c) => unmount(c))
    }
    const parent = vnode.el.parentNode
    if (parent) parent.removeChild(vnode.el)
  },
})
const Text = Symbol()
// const newVNode = {
//   type: Text,
//   children: 'wo 是文本内容',
// }
const Comment = Symbol()
// const newVnode1 = {
//   type: Comment,
//   children: '我是注释内容',
// }

const Fragment = Symbol()

const bol = ref(false)

const MyComponent = {
  name: 'MyComponent',
  data() {
    return {
      foo: 'hello world',
    }
  },
  render() {
    return {
      type: 'div',
      children: `foo ${this.foo}`,
    }
  },
}

const CompVNode = {
  type: MyComponent,
}
renderer.render(CompVNode, document.getElementById('app'))

// const oldVnode = {
//   type: 'div',
//   children: [
//     { type: 'p', children: '1', key: 1 },
//     { type: 'p', children: '2', key: 2 },
//     { type: 'p', children: 'hello', key: 3 },
//   ],
// }
// const newVnode = {
//   type: 'div',
//   children: [
//     // { type: 'p', children: 'world', key: 3 },
//     { type: 'p', children: '1', key: 1 },
//     // { type: 'p', children: '4', key: 4 },
//     { type: 'p', children: '2', key: 2 },
//   ],
// }

// renderer.render(oldVnode, document.getElementById('app'))

// setTimeout(() => {
//   renderer.render(newVnode, document.getElementById('app'))
// }, 1000)

const State = {
  initial: 1,
  tagOpen: 2,
  tagName: 3,
  text: 4,
  tagEnd: 5,
  tagEndName: 6,
}

function isAlpha(char) {
  return /[a-zA-Z]/.test(char)
}

function tokenize(str) {
  let currentState = State.initial

  const chars = []
  const tokens = []

  while (str) {
    const char = str[0]

    switch (currentState) {
      case State.initial:
        if (char === '<') {
          currentState = State.tagOpen
          str = str.slice(1)
        } else if (isAlpha(char)) {
          currentState = State.text
          chars.push(char)
          str = str.slice(1)
        }
        break
      case State.tagOpen:
        if (isAlpha(char)) {
          currentState = State.tagName
          chars.push(char)
          str = str.slice(1)
        } else if (char === '/') {
          currentState = State.tagEnd
          str = str.slice(1)
        }
        break
      case State.tagName:
        if (isAlpha(char)) {
          chars.push(char)
          str = str.slice(1)
        } else if (char === '>') {
          currentState = State.initial

          tokens.push({
            type: 'tag',
            name: chars.join(''),
          })

          chars.length = 0
          str = str.slice(1)
        }
        break
      case State.text:
        if (isAlpha(char)) {
          chars.push(char)
          str = str.slice(1)
        } else if (char === '<') {
          currentState = State.tagOpen

          tokens.push({
            type: 'text',
            content: chars.join(''),
          })
          chars.length = 0
          str = str.slice(1)
        }
        break
      case State.tagEnd:
        if (isAlpha(char)) {
          currentState = State.tagEndName
          chars.push(char)
          str = str.slice(1)
        }
        break
      case State.tagEndName:
        if (isAlpha(char)) {
          chars.push(char)
          str = str.slice(1)
        } else if (char === '>') {
          currentState = State.initial

          tokens.push({
            type: 'tagEnd',
            name: chars.join(''),
          })

          chars.length = 0
          str = str.slice(1)
        }
        break
    }
  }
  return tokens
}

function parse(str) {
  const context = {
    source: str,
    mode: TextModes.DATA,
    advanceBy(num) {
      context.source = context.source.slice(num)
    },
    advanceSpaces() {
      const match = /^[\t\r\n\f ]+/.exec(context)
      if (match) {
        context.advanceBy(match[0].length)
      }
    },
  }
  const nodes = parseChildren(context, [])
  return {
    type: 'Root',
    children: nodes,
  }
}
function parseChildren(context, ancestors) {
  let nodes = []
  const { mode, source } = context
  while (!isEnd(context, ancestors)) {
    let node
    if (mode === TextModes.DATA || mode === TextModes.RCDATA) {
      if (mode === TextModes.DATA && source[0] === '<') {
        if (source[1] === '!') {
          if (source.startsWith('<!--')) {
            node = parseComment(context)
          } else if (source.startsWith('<![CDATA[')) {
            node = parseCDATA(context, ancestors)
          }
        } else if (source[1] === '/') {
          console.error('无效的结束标签')
          continue
        } else if (/[a-z]/i.test(source[1])) {
          node = parseElement(context, ancestors)
        }
      } else if (context.source.startsWith('{{')) {
        node = parseInterpolation(context)
      }
    }
    if (!node) {
      node = parseText(context)
    }

    nodes.push(node)
  }
  return nodes
}
function isEnd(context, ancestors) {
  if (!context.source) return true
  for (let i = ancestors.length - 1; i >= 0; i--) {
    if (context.source.startsWith(`</${ancestors[i].tag}`)) {
      return true
    }
  }
  // const parent = ancestors[ancestors.length - 1]
}
function parseElement(context, ancestors) {
  const element = parseTag(context)

  if (element.isSelfClosing) return element
  if (element.tag === 'textarea' || element.tag === 'title') {
    context.mode = TextModes.RCDATA
  } else if (/style|xmp|iframe|noembed|noframes|noscript/.test(element.tag)) {
    context.mode = TextModes.RAWTEXT
  } else {
    context.mode = TextModes.DATA
  }

  ancestors.push(element)

  element.children = parseChildren(context, ancestors)

  ancestors.pop()

  if (context.source.startsWith(`</${element.tag}`)) {
    parseTag(context, 'end')
  } else {
    console.error(`${element.tag} 标签缺少闭合标签`)
  }

  return element
}
function parseTag(context, type = 'start') {
  const { advanceBy, advanceSpaces } = context

  const match =
    type === 'start'
      ? /^<([a-z][^\t\r\n\f />]*)/i.exec(context.source)
      : /^<\/([a-z][^\t\r\n\f />]*)/i.exec(context.source)

  const tag = match[1]
  advanceBy(match[0].length)

  advanceSpaces()

  const props = parseAttributes(context)

  const isSelfClosing = context.source.startsWith('/>')

  advanceBy(isSelfClosing ? 2 : 1)
  return {
    type: 'Element',
    tag,
    props,
    children: [],
    isSelfClosing,
  }
}
function parseAttributes(context) {
  const { advanceBy, advanceSpaces } = context
  const props = []

  while (!context.source.startsWith('>') && !context.source.startsWith('/>')) {
    const match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source)

    const name = match[0]
    advanceBy(name.length)
    advanceSpaces()

    advanceBy(1)
    advanceSpaces()

    let value = ''

    const quote = context.source[0]

    const isQuoted = quote === '"' || quote === "'"

    if (isQuoted) {
      advanceBy(1)
      const endQuoteIndex = context.source.indexOf(quote)

      if (endQuoteIndex > -1) {
        value = context.source.slice(0, endQuoteIndex)
        advanceBy(value.length)
        advanceBy(1)
      } else {
        console.error('缺失引号')
      }
    } else {
      const match = /^[^\t\r\n\f />]+/.exec(context.source)
      if (match) {
        value = match[0]
        advanceBy(value.length)
      }
    }
    advanceSpaces()

    props.push({
      type: 'Attribute',
      name,
      value,
    })
  }
  return props
}

function parseText(context) {
  let endIndex = context.source.length
  const ltIndex = context.source.indexOf('<')

  const delimiterIndex = context.source.indexOf('{{')

  if (ltIndex > -1 && ltIndex < endIndex) {
    endIndex = ltIndex
  }

  if (delimiterIndex > -1 && delimiterIndex < endIndex) {
    endIndex = delimiterIndex
  }
  const content = context.source.slice(0, endIndex)

  context.advanceBy(content.length)

  return {
    type: 'Text',
    content: decodeHtml(content),
  }
}
function decodeHtml(rawText, asAttr = false) {
  let offset = 0
  const end = rawText.length

  let decodeText = ''
  let maxCRNameLength = 0

  function advance(length) {
    offset += length
    rawText = rawText.slice(length)
  }

  while (offset < end) {
    const head = /&(?:#x?)?/i.exec(rawText)

    if (!head) {
      const remaining = end - offset

      decodeText += rawText.slice(0, remaining)

      advance(remaining)
      break
    }

    decodeText += rawText.slice(0, head.index)

    advance(head.index)

    if (head[0] === '&') {
      let name = ''
      let value

      if (/[0-9a-z]/i.test(rawText[1])) {
        if (!maxCRNameLength) {
          maxCRNameLength = Object.keys(namedCharacterReferences).reduce(
            (max, name) => Math.max(max, name.length),
            0
          )
        }

        for (let length = maxCRNameLength; !value && length > 0; --length) {
          name = rawText.substr(1, length)

          value = namedCharacterReferences[name]
        }

        if (value) {
          const semi = name.endsWith(';')
          if (
            asAttr &&
            !semi &&
            /[=a-z0-9]/i.test(rawText[name.length + 1] || '')
          ) {
            decodeText += '&' + name
          } else {
            decodeText += value
            advance(1 + name.length)
          }
        } else {
          decodeText += '&' + name
          advance(1 + name.length)
        }
      } else {
        decodeText += '&'
        advance(1)
      }
    } else {
      const hex = head[0] === '&#x'
      const pattern = hex ? /^&#x([0-9a-f]+);?/i : /^&#([0-9]+);?/
      // 最终，body[1] 的值就是 Unicode 码点
      const body = pattern.exec(rawText)

      if (body) {
        const cp = parseInt(body[1], hex ? 16 : 10)

        if (cp === 0) {
          cp = 0xfffd
        } else if (cp > 0x10ffff) {
          cp = 0xfffd
        } else if (cp >= 0xd800 && cp <= 0xdfff) {
          cp = 0xfffd
        } else if ((cp >= 0xfdd0 && cp <= 0xfdef) || (cp & 0xfffe) === 0xfffe) {
        } else if (
          (cp >= 0x01 && cp <= 0x08) ||
          cp === 0x0b ||
          (cp >= 0x0d && cp <= 0x1f) ||
          (cp >= 0x7f && cp <= 0x9f)
        ) {
          cp = CCR_REPLACEMENTS[cp] || cp
        }
        decodedText += String.fromCodePoint(cp)
        // 消费掉整个数字字符引用的内容
        advance(body[0].length)
      } else {
        decodedText += head[0]
        advance(head[0].length)
      }
    }
  }
  return decodeText
}
function parseInterpolation(context) {
  context.advanceBy('{{'.length)

  closeIndex = context.source.indexOf('}}')

  if (closeIndex < 0) {
    console.error('')
  }

  const content = context.source.slice(0, closeIndex)
  context.advanceBy(content.length)
  context.advanceBy('}}'.length)

  return {
    type: 'Interpolation',
    content: {
      type: 'Expression',
      content: decodeHtml(content),
    },
  }
}
function parseComment(context) {
  context.advanceBy('<!--'.length)
  closeIndex = context.source.indexOf('-->')
  const content = context.source.slice(0, closeIndex)

  context.advanceBy(content.length)

  context.advanceBy('-->'.length)
  return {
    type: 'Comment',
    content,
  }
}
function dump(node, indent = 0) {
  const type = node.type

  const desc =
    node.type === 'Root'
      ? ''
      : node.type === 'Element'
      ? node.tag
      : node.content

  console.log(`${'-'.repeat(indent)}${type}: ${desc}`)

  if (node.children) {
    node.children.forEach((n) => dump(n, indent + 2))
  }
}

function traverseNode(ast, context) {
  context.currentNode = ast
  const exitFns = []
  const transforms = context.nodeTransforms
  for (let i = 0; i < transforms.length; i++) {
    const onExit = transforms[i](context.currentNode, context)
    if (onExit) {
      exitFns.push(onExit)
    }
    if (!context.currentNode) return
  }
  const children = context.currentNode.children

  if (children) {
    for (let i = 0; i < children.length; i++) {
      context.parent = context.currentNode
      context.childIndex = i
      traverseNode(children[i], context)
    }
  }
  let i = exitFns.length
  while (i--) {
    exitFns[i]()
  }
}

function transform(ast) {
  const context = {
    currentNode: null,
    parent: null,
    replaceNode(node) {
      context.parent.children[context.childIndex] = node
      context.currentNode = node
    },
    removeNode() {
      if (context.parent) {
        context.parent.children.splice(context.childIndex, 1)

        context.currentNode = null
      }
    },
    nodeTransforms: [transformRoot, transformElement, transformText],
  }
  traverseNode(ast, context)
  dump(ast)
  return ast

  function transformElement(node) {
    // if (node.type === 'Element' && node.tag === 'p') {
    //   node.tag = 'h1'
    // }
    return () => {
      if (node.type !== 'Element') return

      const CallExp = createCallExpression('h', [createStringLiteral(node.tag)])

      node.children.length === 1
        ? CallExp.arguments.push(node.children[0].jsNode)
        : CallExp.arguments.push(
            createArrayExpression(node.children.map((c) => c.jsNode))
          )
      node.jsNode = CallExp
    }
  }
  function transformText(node, context) {
    if (node.type === 'Text') {
      // context.replaceNode({
      //   type: 'Element',
      //   tag: 'span',
      // })
      // context.removeNode()
      // node.content = node.content.repeat(2)

      node.jsNode = createStringLiteral(node.content)
    }
  }
}
const CallExp = {
  type: 'CallEXpression',
  callee: {
    type: 'Identifier',
    name: 'h',
    arguments: [],
  },
}
const Str = {
  type: 'StringLiteral',
  value: 'div',
}
const Arr = {
  type: 'ArrayExpression',
  elements: [],
}

function createStringLiteral(value) {
  return {
    type: 'StringLiteral',
    value,
  }
}
function createIdentifier(name) {
  return {
    type: 'Identifier',
    name,
  }
}
function createArrayExpression(elements) {
  return {
    type: 'ArrayExpression',
    elements,
  }
}
function createCallExpression(callee, arguments) {
  return {
    type: 'CallExpression',
    callee: createIdentifier(callee),
    arguments,
  }
}
function transformRoot(node) {
  return () => {
    if (node.type !== 'Root') return

    const vnodeJSAST = node.children[0].jsNode

    node.jsNode = {
      type: 'FunctionDecl',
      id: {
        type: 'Identifier',
        name: 'render',
      },
      params: [],
      body: [
        {
          type: 'ReturnStatement',
          return: vnodeJSAST,
        },
      ],
    }
  }
}

function generate(node) {
  const context = {
    code: '',
    push(code) {
      context.code += code
    },
    currentIndent: 0,
    newline() {
      context.code += '\n' + `  `.repeat(context.currentIndent)
    },
    indent() {
      context.currentIndent++
      context.newline()
    },
    deIndent() {
      context.currentIndent--
      context.newline()
    },
  }
  genNode(node, context)

  return context.code

  function genNode(node, context) {
    switch (node.type) {
      case 'FunctionDecl':
        genFunctionDecl(node, context)
        break
      case 'ReturnStatement':
        genReturnStatement(node, context)
        break
      case 'CallExpression':
        genCallExpression(node, context)
        break
      case 'StringLiteral':
        genStringLiteral(node, context)
        break
      case 'ArrayExpression':
        genArrayExpression(node, context)
        break
    }
  }
  function genFunctionDecl(node, context) {
    const { push, indent, deIndent } = context

    push(`function ${node.id.name} `)
    push(`(`)
    genNodeList(node.params, context)
    push(`) `)
    push(`{`)
    indent()
    node.body.forEach((n) => genNode(n, context))
    deIndent()
    push(`}`)
  }

  function genNodeList(nodes, context) {
    const { push } = context
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      genNode(node, context)
      if (i < nodes.length - 1) {
        push(', ')
      }
    }
  }

  function genArrayExpression(node, context) {
    const { push } = context
    push('[')
    genNodeList(node.elements, context)
    push(']')
  }

  function genReturnStatement(node, context) {
    const { push } = context
    push(`return `)
    genNode(node.return, context)
  }
  function genStringLiteral(node, context) {
    const { push } = context
    push(`'${node.value}'`)
  }
  function genCallExpression(node, context) {
    const { push } = context

    const { callee, arguments: args } = node
    push(`${callee.name}(`)
    genNodeList(args, context)
    push(`)`)
  }
}

const TextModes = {
  DATA: 'DATA',
  RCDATA: 'RCDATA',
  RAWTEXT: 'RAWTEXT',
  CDATA: 'CDATA',
}
const namedCharacterReferences = {
  gt: '>',
  'gt;': '>',
  lt: '<',
  'lt;': '<',
  ltcc: '⪦',
  'ltcc;': '⪦',
}

const CCR_REPLACEMENTS = {
  0x80: 0x20ac,
  0x82: 0x201a,
  0x83: 0x0192,
  0x84: 0x201e,
  0x85: 0x2026,
  0x86: 0x2020,
  0x87: 0x2021,
  0x88: 0x02c6,
  0x89: 0x2030,
  0x8a: 0x0160,
  0x8b: 0x2039,
  0x8c: 0x0152,
  0x8e: 0x017d,
  0x91: 0x2018,
  0x92: 0x2019,
  0x93: 0x201c,
  0x94: 0x201d,
  0x95: 0x2022,
  0x96: 0x2013,
  0x97: 0x2014,
  0x98: 0x02dc,
  0x99: 0x2122,
  0x9a: 0x0161,
  0x9b: 0x203a,
  0x9c: 0x0153,
  0x9e: 0x017e,
  0x9f: 0x0178,
}

let root = parse('<div><!-- comments --></div>')
console.log(root, 'root')

// function compile(template) {
//   let ast = parse(template)

//   transform(ast)
//   console.log(ast, 'ast')
//   const code = generate(ast.jsNode)
//   console.log(code, 'code')
// }

// compile(`<div><p>Vue</p><p>Template</p></div>`)

// function render () {
//   return h( 'div', [h( 'p',  'Vue'), h( 'p',  'Template')])
// }

// function render () {
//   return h('div', [h('p', 'Vue'), h('p', 'Template')])
// }

function createVNode(tag, props, children) {
  const key = props && props.key
  props && delete props.key
  return { tag, props, children, key }
}

function render() {
  return createVNode(
    'div',
    {
      id: 'foo',
    },
    [createVNode('p', { class: 'bar' }, text, PatchFlags.TEXT)]
  )
}
