# Shell 启动配置文件

nano  
删除一行 Ctrl + K
恢复删除的行 Ctrl + U
删除光标前的一个单词 Option + Delete
删除光标后的一个单词 Option + D

### zshrc
Z Shell Resource Configuration

- Option + ← 向左跳一个单词
- Option + → 向右跳一个单词
- Ctrl + A	移到行首
- Ctrl + E	移到行尾
- Ctrl + L  清屏（但不清历史）
Ctrl + W	删除光标前一个单词
Ctrl + U	删除到行首
Ctrl + K	删除到行尾
Ctrl + D	删除当前字符（或 EOF）

命令撤回 Ctrl + _ 或 Ctrl + /
提示选中 →


```bash
~/.zshrc
~/.zprofile
~/.zshenv
~/.bashrc
~/.bash_profile
~/.profile
```



<!-- eval 评估
$() 命令替换
echo 输出 -->


查看文件推荐


- less 逐页显示文件内容
  - q 退出 less
- cat 连接并显示文件内容
- grep 文本搜索工具
- head 显示文件开头部分
- tail 显示文件结尾部分



### 文件缓存处理

`大杀器` mdfind

```bash
# 1. 启动项和守护进程
~/Library/LaunchAgents/          # 用户级别的启动代理
/Library/LaunchAgents/           # 系统级别的启动代理
/Library/LaunchDaemons/          # 系统守护进程（需要sudo权限）

# 2. 应用支持文件
~/Library/Application Support/   # 应用数据和支持文件
/Library/Application Support/

# 3. 偏好设置
~/Library/Preferences/           # 用户偏好设置
/Library/Preferences/

# 4. 缓存文件
~/Library/Caches/                # 用户缓存
/Library/Caches/

# 5. 其他可能位置
~/Library/Containers/           # Sandboxed 应用的容器
~/Library/Group Containers/     # 应用组容器
```

## Wrap

tab 键补全文件路径 多一个字母是共同的部分 

遇到这样的可以试下其他类似的 已确定不是Bug

## 在同一个窗口内：折叠所有子文件夹

按 Cmd + A 全选当前文件夹下的所有内容。
Command + Option + ← (左箭头)


❯ 将当前的代办应用重构为使用 React + Typescript + vite 的项目

