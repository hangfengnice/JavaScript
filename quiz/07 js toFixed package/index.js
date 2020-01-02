/**
 * 一个数值的字符串表现形式，不使用指数记数法，
 * 而是在小数点后有 digits（注：digits具体值取决于传入参数）位数字。
 * 该数值在必要时进行四舍五入，另外在必要时会用 0 来填充小数部分，以便小数部分有指定的位数。
 * 如果数值大于 1e+21，该方法会简单调用 Number.prototype.toString()并返回一个指数记数法格式的字符串
 */
var NativetoFixed = Number.prototype.toFixed;//备份

//方式一：替换小数点保留精度后面一位5为6
var MytoFixed = function(digits){
    var reg = new RegExp('(\\d*.\\d{' + digits + '})5(\\d*)', 'g')
    var number = Number(this.toString().replace(reg, '$1' + 6 + '$2'));
    return NativetoFixed.call(number,digits);
}

//方式二：给小数点保留精度后面补一位小数
var MytoFixed = function(digits){
    var number = Number(this)+Math.pow(10,-digits-1);
    return NativetoFixed.call(number,digits);
}

1.0141.toFixed()

console.log(1.0141.toFixed(2));