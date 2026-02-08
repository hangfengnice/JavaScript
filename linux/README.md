# 学习

echo
whoami
id
id root
id -un # 显示 User Name（用户名）

pwd # “print working directory”，显示当前目录
echo ~ # 显示当前用户的 home 目录

ls   # 列出当前目录下的文件和目录
ls ~ # 列出当前用户 home 目录下的文件和目录
cd .. # 切换到上一级目录

touch 
mkdir -p # 创建多级目录 parents

ls -l # 列出当前目录下的文件和目录，并显示详细信息
ls -a # 列出当前目录下的所有文件和目录，包括隐藏文件（以 . 开头的文件）
ls -la # 列出当前目录下的所有文件和目录，并显示详细信息
ls -lh # 列出当前目录下的文件和目录，并以人类可读的格式显示文件大小（如 KB、MB） human-readable

cp
mv 
rm -i # 删除文件，-i 选项会提示用户确认删除操作
rmdir # 删除空目录
rm -r # 删除目录及其内容，-r 选项表示递归删除

ls -R # 列出当前目录及其子目录下的所有文件和目录
rm -rf # 强制删除目录及其内容，-f 选项表示强制删除，不提示用户确认

man # 显示命令的使用手册

which #
find # 在文件系统中搜索文件和目录
find -size +100M # 查找大于 100MB 的文件 K B MB GB

grep # 在文件中搜索指定的字符串
grep -r "关键词" . # 在当前目录及其子目录中递归搜索关键词
grep -n "关键词" 文件名 # 显示匹配行的行号

wc # 统计文件的行数、字数和字符数 word count
wc -l 文件名 # 统计文件的行数
wc -w 文件名 # 统计文件的字数
wc -c 文件名 # 统计文件的字符数
wc -m 文件名 # 统计文件的字符数（包括多字节字符）

> file.txt # 将输出重定向到文件 file.txt，覆盖原有内容
>> file.txt # 将输出追加到文件 file.txt 的末尾

tail -n 10 file.txt # 显示文件的最后 10 行
tail -f file.txt # 实时显示文件的新增内容（常用于查看日志文件） follow
head -n 10 file.txt # 显示文件的前 10 行

## 效率工具

Tab 自动补全：输入文件名/命令时按 Tab 键自动补全（避免拼写错误）。
命令历史：按 ↑ 键切换历史命令，或用 Ctrl+R 搜索历史（输入关键词后按 Ctrl+R 循环查找）。
Man 手册：忘记命令用法时，用 man <命令> 查看帮助（如 man cat）。
