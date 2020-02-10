# Text 节点和 DocuemntFragment 节点

## Text 节点的属性

data
wholeText
length
nextElementSibling，previousElementSibling

appendData()：在Text节点尾部追加字符串。
deleteData()：删除Text节点内部的子字符串，第一个参数为子字符串开始位置，第二个参数为子字符串长度。
insertData()：在Text节点插入字符串，第一个参数为插入位置，第二个参数为插入的子字符串。
replaceData()：用于替换文本，第一个参数为替换开始位置，第二个参数为需要被替换掉的长度，第三个参数为新加入的字符串。
subStringData()：用于获取子字符串，第一个参数为子字符串在Text节点中的开始位置，第二个参数为子字符串长度。

remove()
splitText()

## DocumentFragment 节点

如果想要保存DocumentFragment节点的内容，可以使用cloneNode方法

document
  .querySelector('ul')
  .appendChild(docFrag.cloneNode(true));
