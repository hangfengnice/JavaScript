# tips

1. 澄清式提问
2. 专家模拟 全球最顶尖的专家与机构有哪些？这些专家在面临我所遇到的问题时候，会用什么方法？模拟这些专家的方法，深入研究刚才的问题。

## 学习辅导

1. 角色引导
2. 设定目标
3. 互动反馈
4. 适应调整
5. 逐步提升

1. 逐步思考 let's think step by step
2. 自我修正/反思 
3. 检索增强生成 (RAG-Retrieval-Augmented Generation)
4. 提示连/工作流 (Prompt Chaining / Pipelines)

CRTF 框架 - 简洁高效

COSTAR 框架 - 全面细致

SPAR 框架 - 沟通导向 全拼 


1. 角色扮演 personas
2. 清晰指令 clear instructions
3. 提供背景 context
4. 给出示例 examples
5. 定义输出 define output
6. 分步思考 step-by-step reasoning
7. 指定受众 target audience
8. 设定约束 constraints
9. 鼓励反思 reflection
10. 迭代优化 iterative refinement


# Role: 高级前端专家 (Vue 3 & TypeScript)

## Context (背景与技术栈)
我正在一个基于 Mac 开发环境的现代前端项目中工作。
- 核心架构: Vue 3 (Composition API) + Vite + TypeScript
- 状态管理: [Pinia / 组合式函数 Hooks]
- 样式方案: [Tailwind CSS / SCSS / Element Plus]
- 运行环境: Node.js 20+

## Task (任务描述)
我需要你实现一个 [例如：通用的虚拟滚动表格组件 / 登录逻辑 Hook / Vite 自定义插件]。
具体功能需求：
1. [需求点 1：支持大数据量渲染]
2. [需求点 2：支持搜索筛选]
3. [需求点 3：与后端 API 联调]

## Constraints (约束条件)
1. **代码规范**: 严格遵守 TypeScript 5.x 语法，禁止使用 `any`，优先使用 Interface 定义 Props。
2. **编写风格**: 使用 `<script setup>` 语法。逻辑必须抽离到独立的 `useXXX` Hooks 中，保持 UI 组件简洁。
3. **模块化**: 遵循 ESM 规范（import/export），不使用 CommonJS。
4. **性能**: 考虑到 [内存泄漏/重绘优化]，请确保 [特定逻辑] 的执行效率。
5. **错误处理**: 必须包含 Loading 状态、Error 捕获以及数据为空的占位逻辑。

## Examples (参考示例/结构)
期望的代码结构示意：
- src/hooks/useTable.ts (业务逻辑)
- src/components/BaseTable.vue (UI 展现)
- src/types/table.d.ts (类型声明)

## Output Format (定义输出)
请按以下顺序输出：
1. **Type Definitions**: 核心数据结构的 TS 接口。
2. **Logic (Hooks)**: 封装好的组合式逻辑代码。
3. **Component**: 完整的 Vue 组件代码（含 Scoped CSS）。
4. **Usage**: 一个简短的父组件调用示例。
5. **Reflections**: 简要说明代码中的关键设计决策或性能考量。

## Step-by-step Reasoning (思考路径)
在编写代码前，请先思考并简述：
- 如何处理响应式数据的解构问题？
- 如何通过 Vite 环境配置优化打包体积？