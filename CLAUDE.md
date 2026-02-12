# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 仓库概述

这是一个个人 **JavaScript 学习资料和示例仓库**，主要用于学习笔记和实验性代码的存放。仓库不是生产应用项目，而是学习资源集合。

## 目录结构

目录按序号和中文前缀命名，便于快速定位：

- **`01_fundamentals_基础/`** - JavaScript 核心基础知识（类型系统、异步编程、ES6+ 特性）

- **`02_polyfills_手写实现/`** - JavaScript 核心 API 手写实现
  - 包含 call/apply/bind、Promise、防抖节流、深拷贝、LRU 缓存、柯里化、compose 等

- **`03_css/`** - CSS 布局、Flexbox、文本省略等样式技巧

- **`04_http/`** - HTTP 协议、浏览器工作原理

- **`05_frameworks_框架/`** - 前端框架学习
  - `vue3/01 编译/` - Vue 3 编译和优化笔记

- **`06_algorithms_算法/`** - 数据结构与算法
  - `01sort/` - 各种排序算法（冒泡、选择、插入、希尔、归并、快排）
  - `02heap/` - 堆结构（最小堆、最大堆）
  - `07/`、`08/`、`11/`、`12/`、`16/`、`28/`、`33/` - LeetCode 题解
  - `main.html` - 算法可视化演示页面

- **`07_patterns_设计模式/`** - 设计模式学习笔记

- **`08_playground_实验场/`** - 实验性代码和 Demo
  - `reactivity.global.js` - Vue 3 响应式系统完整构建产物
  - `render.js` - 自定义渲染器实现
  - `index.html` - 响应式系统演示页面
  - `super-mario/` - 超级马里奥游戏实现

- **`09_tools_工具/`** - 开发工具
  - `git/` - Git 相关笔记
  - `linux/` - Linux 命令和终端学习笔记
  - `mac/` - macOS 相关

- **`10_ai/`** - AI 工具和提示词
  - `01_prompts/` - AI 提示词模板（如 Vue 2 高性能组件生成 Prompt）
  - `02_claude/` - Claude 相关笔记
  - `03_deepseek/` - DeepSeek 相关笔记
  - `04_mcp/` - MCP 相关文档
  - `05_alike_其他/` - 其他 AI 工具笔记

- **`11_notes_笔记/`** - 个人学习笔记和随笔

## 本地开发

如需在浏览器中查看 HTML 文件：

```bash
# 启动本地服务器（端口 8088）
http-server -c-1 -p 8088 -o
```

## 工作注意事项

1. **文档语言** - 文档和提交信息主要使用中文

2. **仓库性质** - 本仓库主要是**学习资源**，非生产应用。大多数文件是笔记性质的 markdown 文档

3. **修改原则** - 学习笔记目录修改前请先阅读，理解内容结构后再做调整

4. **实验区域** - `08_playground_实验场/` 目录用于测试和验证想法，可随意修改
