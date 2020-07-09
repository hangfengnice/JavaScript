# null undefined

## 只要意在保存对象的变量还没有真正保存对象，就应该明确地让该变量保存null值

## Number

* Number(null) = 0
* Number(undefined) = NaN

## null

* 作为函数的参数，表示该函数的参数不是对象
* 作为对象原型链的终点
* 解除引用

## undefined

* 变量被声明了，但没有赋值时，就等于undefined。

* 调用函数时，应该提供的参数没有提供，该参数等于undefined。

* 对象没有赋值的属性，该属性的值为undefined。

* 函数没有返回值时，默认返回undefined。

* 结构赋值想使用默认值 就传undefined

* 使用void对表达式求值
