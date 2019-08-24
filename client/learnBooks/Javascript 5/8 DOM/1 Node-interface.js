// 1 属性

// 1.1 Node.prototype.nodeType
{
  // nodeType属性返回一个整数值，表示节点的类型
  console.log(document.nodeType) // 9

  // 不同节点的nodeType属性值和对应的常量如下。

  // 文档节点（document）：9，对应常量Node.DOCUMENT_NODE
  // 元素节点（element）：1，对应常量Node.ELEMENT_NODE
  // 属性节点（attr）：2，对应常量Node.ATTRIBUTE_NODE
  // 文本节点（text）：3，对应常量Node.TEXT_NODE
  // 文档片断节点（DocumentFragment）：11，对应常量Node.DOCUMENT_FRAGMENT_NODE
  // 文档类型节点（DocumentType）：10，对应常量Node.DOCUMENT_TYPE_NODE
  // 注释节点（Comment）：8，对应常量Node.COMMENT_NODE

  // Node.prototype.nodeName;

  // 不同节点的nodeName属性值如下。

  // 文档节点（document）：#document
  // 元素节点（element）：大写的标签名
  // 属性节点（attr）：属性的名称
  // 文本节点（text）：#text
  // 文档片断节点（DocumentFragment）：#document-fragment
  // 文档类型节点（DocumentType）：文档的类型
  // 注释节点（Comment）：#comment
}