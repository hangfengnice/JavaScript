# Linux 终端学习笔记

> 个人学习笔记：用最少的命令，解决日常 80% 的终端操作。以"场景驱动"的方式记录，方便查阅。

## 1. 先弄清楚你是谁、在哪、能看见什么

这三件事搞清楚，后面所有操作才不会迷路。

```bash
whoami           # 当前用户名
id               # 当前用户的 uid/gid 与组信息
id -un           # 仅显示用户名
pwd              # 当前工作目录
ls               # 当前目录文件与文件夹
ls -la           # 显示隐藏文件 + 详细信息
```

小提示：

- `~` 代表你的 home 目录
- `ls -lh` 可以把文件大小显示成人类可读格式
- `ls -R` 可以递归列出子目录（快速扫一遍目录结构）

## 2. 目录与文件操作（最常用）

```bash
cd ..             # 返回上一级目录
mkdir -p a/b/c    # 递归创建目录

touch file.txt    # 创建空文件
cp a b            # 复制
mv a b            # 移动/重命名
rm -i file.txt    # 删除前确认
rmdir empty_dir   # 删除空目录
rm -r dir         # 递归删除目录
rm -rf dir        # 强制递归删除（危险）
```

经验法则：

- 删除前尽量用 `-i` 保护自己
- 不确定时先 `ls` 再操作，避免“删错地方”

## 3. 查找与搜索（高效率必备）

查找文件：

```bash
which git                         # 定位命令路径
find . -name "*.log"             # 按名称查找
find . -size +100M                # 找出大于 100MB 的文件
```

搜索内容：

```bash
grep "关键词" file.txt            # 在文件中查找
grep -n "关键词" file.txt          # 带行号
grep -r "关键词" .                 # 递归搜索
```

## 4. 文件内容查看

```bash
head -n 10 file.txt   # 前 10 行
tail -n 10 file.txt   # 后 10 行
tail -f app.log       # 实时追踪日志新增内容
```

## 5. 重定向与追加输出

```bash
echo "hello" > file.txt   # 覆盖写入
echo "hello" >> file.txt  # 追加写入
```

这个能力在写脚本、拼装日志时非常有用。配合 `>`/`>>` 能快速生成临时文件或记录命令输出。

## 6. Vim 简明速记（能保存就赢了）

**命令模式**：

- `0` 行首，`$` 行尾
- `gg` 文件开头，`G` 文件结尾
- `/关键词` 向下查找，`?关键词` 向上查找
- `n` / `N` 重复查找
- `u` 撤销，`Ctrl+r` 反撤销
- `yy` 复制当前行，`p` 粘贴，`dd` 删除当前行

**插入模式**：

- `i` 光标前插入
- `a` 光标后插入
- `o` 下一行插入
- `O` 上一行插入

**退出保存**：

- `:w` 保存
- `:q` 退出
- `:wq` 保存并退出
- `:q!` 不保存强退

## 7. 权限与所有者（排错关键）

```bash
chmod -R 755 dir                # 递归修改权限
chown -R user:group dir         # 递归修改所有者与组
```

当你遇到“Permission denied”，先检查权限与所有者。

## 8. 终端效率快捷键

- `Tab` 自动补全
- `Ctrl + c` 终止当前命令
- `Ctrl + d` 结束输入/退出终端
- `Ctrl + r` 反向搜索历史
- `history` 查看命令历史
- `history -c` 清空历史
- `history -w` 写入当前会话历史

---


**推荐书籍：**

- Linux命令行大全
- 《How Linux Works》

- Linux Shell脚本攻略
- Linux命令行与shell脚本编程大全
- Linux就该这么学
- Linux Tools Quick Tutorial
- 《Linux Shell脚本攻略》- 入门首选，薄而精
- 《UNIX环境高级编程》（APUE）- 进阶必读
