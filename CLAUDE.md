# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 提供在此仓库中工作的指导。

## 仓库结构

这是一个个人 JavaScript 学习资料和示例仓库。目录结构包括：

- **`todo-app/`** - React + TypeScript + Vite 应用（唯一有构建脚本的活动项目）
- **`01 javascript 基础/`** - JavaScript 基础（类型、类型判断、数组、Symbol）
- **`02 css/`** - CSS 笔记（flexbox、文本省略）
- **`03 http/`** - HTTP 协议笔记
- **`06 手写/`** - 手写实现（可能是 polyfill/工具函数）
- **`z_demo/`** - 实验性示例（Vue3 响应式探索）
- **`vue3/`** - Vue 3 编译和优化笔记
- **`设计模式/`** - 设计模式
- **`数据结构与算法之美/`** - 数据结构与算法
- **`deep/`, `alike/`, `prompts/`** - 各种笔记和提示词

## todo-app (React + TypeScript + Vite)

### 开发命令

```bash
cd todo-app
npm run dev          # 启动开发服务器 (http://localhost:5173)
npm run build        # 生产环境构建 (tsc -b && vite build)
npm run lint         # 运行 ESLint
npm run preview      # 本地预览生产构建
```

### 架构

待办事项应用采用 **组件化架构**，使用 **Context 进行状态管理**：

- **`src/App.tsx`** - 主应用组件，包含 `AppContent` 和待办事项状态逻辑
  - 使用 `useLocalStorage` hook 进行数据持久化
  - 待办操作：`addTodo`、`toggleTodo`、`deleteTodo`、`clearCompleted`

- **`src/contexts/LanguageContext.tsx`** - 国际化上下文（中文/英文）
  - `LanguageProvider` 包裹整个应用
  - `useLanguage()` hook 通过 `t(key)` 函数访问翻译

- **`src/hooks/useLocalStorage.ts`** - 自定义 hook，实现 localStorage 与状态同步

- **组件** (`src/components/`)：
  - `Header.tsx` - 应用头部，带语言切换
  - `InputArea.tsx` - 待办输入，带优先级选择器
  - `TodoList.tsx` - 待办事项列表
  - `TodoItem.tsx` - 单个待办事项
  - `Footer.tsx` - 活跃计数和清除已完成按钮

### 核心类型

```typescript
type Priority = 'high' | 'medium' | 'low';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: Priority;
}
```

### 翻译键

添加新的 UI 文本时，需要在 `LanguageContext.tsx` 中同时添加 `zh` 和 `en` 键：
- `app.*` - 头部文本
- `input.*` - 输入区和优先级标签
- `empty.*` - 空状态消息
- `footer.*` - 底部操作

## z_demo (Vue3 响应式探索)

此目录包含探索 Vue 3 响应式系统的实验代码：
- `reactivity.global.js` - Vue 响应式系统（reactive、effect、ref）
- `render.js` - 自定义渲染器实现
- `index.html` - 测试自定义渲染器和 vnode 补丁的演示页面

## 工作注意事项

- 文档和提交信息主要使用中文
- 本仓库主要是**学习资源**，非生产应用
- React/TypeScript 相关工作集中在 `todo-app/`
- 其他目录为学习笔记，修改前请先阅读
