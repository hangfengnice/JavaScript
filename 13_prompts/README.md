与codex沟通指南

1. 先提出1个小的需求, 要求小步优化
2. 每次优化后, 先测试, 保证功能正确, 自己理解了代码 是否满足需求, 再提出下一个小的需求
3. 反复迭代, 直到满足需求
4. 过程中, 遇到好的实现, 让记录下来, 以便下次复用
5. 过程中, 遇到不好的实现, 也要记录下来, 以便下次避免
6. 一定要避免一次做过多的需求
  6.1 过多的需求会codex反应变慢
  6.2 过多的需求会导致沟通困难, 难以明确需求, 难以评估进度
7. 一定要保持沟通畅


针对你的这套指南，我从 Mac 用户的高效工作流和 AI 交互深度两个维度，给出几点进阶建议：

1. 补充“上下文管理” (Context Management)
AI 的记忆（上下文窗口）是有限的。当迭代次数过多时，早期的约定可能会被遗忘。

建议： 增加一个“状态同步”步骤。每 5-8 次小步优化后，让 AI 总结当前的“代码全貌”或“已实现的逻辑清单”。

操作： “请总结目前我们已经完成的功能模块和核心变量定义，确认为下一步优化做准备。”

2. 细化“记录”的动作 (Documentation)
你提到的第 4 点（记录好实现）和第 5 点（记录坏实现）非常关键。在 Mac 上，你可以利用 Raycast Snippets 或 Obsidian/Notion 建立一个 AI-Interaction-Log。

建议： 明确记录“Prompt 模式”。有些需求 AI 做得好，往往是因为你的某个提问方式（Prompt）触发了它的正确逻辑。

操作： 记录“成功的指令（Winning Prompt）”和“失败的指令（Failing Prompt）”。

3. 引入“防御性提问” (Defensive Prompting)
在第 2 步（测试与理解）中，AI 有时会显得“过度自信”。

建议： 在 AI 给出代码后，反问一句：“这段代码在什么边界条件下可能会失效？”或者“这个实现是否符合 [具体编程语言] 的最佳实践（Best Practice）？”

价值： 这能强迫 AI 进行自我审计，发现你可能忽视的潜在 Bug。

4. 建立“版本检查点” (Checkpoints)
既然你使用 Mac，利用好 Git 或 Finder 的复制功能。

建议： 在每次重大优化成功后，进行一次 git commit 或手动备份当前代码文件。

理由： 即使 AI 沟通顺畅，有时也会在第 N 步优化时意外破坏第 N-2 步的功能。有了检查点，你可以迅速回滚。

5. 优化“需求分级” (Requirement Tiering)
针对第 6 点（避免过多需求），你可以建立一个“待办池”。

建议： 维护一个 Pending-Features.md。每次只从池子里拿一个最小颗粒度的任务给 AI，其他的保持在视线之外，避免干扰。

如何信息不够或者有疑问, 可以向我提问

# tips

1. 澄清式提问 - 你可以问：你能否澄清一下这个需求的具体细节吗？或者你能否提供一个示例来说明这个需求吗？
2. 交互式提问 - 你可以问：你能否一步步地指导我完成这个需求吗？或者你能否分解这个需求成几个小步骤吗？
3. 反思式提问 - 你可以问：你能否反思一下这个需求的实现过程吗？或者你能否总结一下这个需求的关键点吗
4. 专家模拟 全球最顶尖的专家与机构有哪些？这些专家在面临我所遇到的问题时候，会用什么方法？模拟这些专家的方法，深入研究刚才的问题。

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