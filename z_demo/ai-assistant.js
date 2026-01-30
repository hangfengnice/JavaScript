// ai-assistant.js
class AiAssistant extends HTMLElement {
  constructor() {
    super()
    // 1. 开启 Shadow DOM，这是隔离的关键
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    // 2. 渲染 UI 和 独立的 CSS
    this.render()
    // 3. 绑定事件
    this.shadow.querySelector('#send-btn').addEventListener('click', () => {
      this.handleSend()
    })
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        /* 这里的样式绝对安全，不会影响外部，也不受外部影响 */
        :host {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
        }
        .container {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          width: 300px;
          font-family: 'Segoe UI', sans-serif; /* 我们可以用现代字体 */
        }
        .header { background: #007bff; color: white; padding: 10px; border-radius: 12px 12px 0 0; }
        .content { height: 200px; padding: 10px; overflow-y: auto; color: #333; }
        input { width: 70%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
        button { background: #007bff; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; }
      </style>

      <div class="container">
        <div class="header">🤖 AI 助手</div>
        <div class="content" id="chat-box">
          <div>你好，我是你的智能助手，有什么可以帮您？</div>
        </div>
        <div style="padding: 10px; border-top: 1px solid #eee;">
          <input type="text" id="input-msg" placeholder="输入问题..." />
          <button id="send-btn">发送</button>
        </div>
      </div>
    `
  }

  handleSend() {
    const input = this.shadow.querySelector('#input-msg')
    const text = input.value
    if (!text) return

    // 模拟添加消息
    const chatBox = this.shadow.querySelector('#chat-box')
    chatBox.innerHTML += `<div style="text-align:right; margin:5px 0; color: #007bff;">${text}</div>`
    input.value = ''

    // 关键：如何跟外部 jQuery 通信？抛出原生 CustomEvent
    this.dispatchEvent(
      new CustomEvent('new-question', {
        detail: { question: text },
        bubbles: true,
        composed: true, // 允许穿透 Shadow DOM 冒泡出去
      }),
    )
  }
}

// 注册组件
customElements.define('ai-assistant', AiAssistant)
