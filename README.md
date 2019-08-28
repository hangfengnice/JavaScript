# javascript

## ECMAScript 6

- **Generator 函数的语法**
  - *yield 表达式*
    - 1 注意，yield表达式只能用在 Generator 函数里面，用在其他地方都会报错
    - 2 yield表达式如果用在另一个表达式之中，必须放在圆括号里面
    - 3 yield表达式用作函数参数或放在赋值表达式的右边，可以不加括号
  - 与 Iterator 接口的关系
  - next 方法的参数
    - yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值

- DOMContentLoaded
  - 当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。
  - load
  另一个不同的事件 load 应该仅用于检测一个完全加载的页面。
  - 在使用 DOMContentLoaded 更加合适的情况下使用 load 是一个令人难以置信的流行的错误，所以要谨慎。注意：DOMContentLoaded 事件必须等待其所属script之前的样式表加载解析完成才会触发.

## BOM

- window
  - 窗口
  - 系统对话框 alert prompt confirm

- location
  - url

- navigator

- screen

- history
