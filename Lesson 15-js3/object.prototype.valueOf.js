var assert = function(value,description){
    description = description || ''
    if (value === true){
        console.info('[成功]' + description)
    }else{
        console.error('[失败]' + description)
    }
}

//Object.prototype.valueOf()
var o = new Object()
var result = o.valueOf() 
assert(typeof result === 'object','返回值的类型是\'object\'')
assert(result === o,'返回值的内容是自身')
var o = new Object();
o.valueOf = function (){
  return 2;
};
result = (1 + o)
assert( result === 3,'默认valudof可以被替换')

//Object.prototype.toString()
var o1 = new Object()
o1.toString()
assert(typeof o1 === 'object','类型为object')
assert(o1 == '[object Object]','返回[object Object]')
var o = new Object();

o.toString = function () {
  return 'hello';
};
assert(o.toString() === 'hello','结果是hello')

//Number.prototype.toFixed()
var result = (10).toFixed(2)
assert(result === '10.00','整数转化为小数')
assert(typeof result === 'string','结果类型是字符串')
assert(result.length === 5,'长度为5')

//String.prototype.substr()
var result = 'JavaScript'.substr(4, 6)
assert(typeof result === 'string','返回类型string')
assert(result === 'Script','返回内容为Script')
var result = 'JavaScript'.substr(3)
assert(result === 'aScript','返回内容为aScript')

//String.prototype.substring()
var result = 'JavaScript'.substr(0, 4)
assert(typeof result === 'string','返回类型为string')
assert(result === 'Java','返回内容为Java')

var result = 'JavaScript'.substring(10, 4) 
assert(result === 'Script','返回内容为Script')

var result = 'Javascript'.substring(-3)
assert(result === 'Javascript','负数转换为0')


//String.prototype.indexOf()
var result = 'hello world'.indexOf('o')
assert(typeof result === 'number','返回数字')
var result = 'JavaScript'.indexOf('script')
assert(result === -1,'不匹配')
var result = 'hello world'.indexOf('o',6)
assert(result === 7,'匹配位置为7')

//Array.prototype.sort()
var result = ['d', 'c', 'b', 'a'].sort()
assert(result instanceof Array ,'返回数组')
assert(result[0] === 'a','排序后第一个为a')
var result = [11, 101].sort()
assert(result[0] === 101,'不是按照大小来排序,按照字符串的字典顺序')

//Array.prototype.push()
var a = [];
a.push(1)
assert(a.length === 1,'数组长度改变为1')

var a = [1, 2, 3];
var b = [4, 5, 6];
a.push.apply(a, b)
assert(a.length === 6,'数组长度变为6')

var a = {a: 1};
[].push.call(a, 2);
assert(a.length === 1,'对象被添加属性后,有length属性')


//Array.prototype.shift()
var a = ['a', 'b', 'c'];

a.shift()

assert(a instanceof Array,'结果还是数组')
assert(a.length === 2,'长度减小')
assert(a[2] === undefined ,'最后一个变为undefined')

//Array.prototype.unshift()
var a = ['a', 'b', 'c'];

a.unshift('x');

assert(a[0] === 'x','在第一个位置插入')
assert(a.length === 4, '增加了数组的长度')

var arr = [ 'c', 'd' ];
arr.unshift('a', 'b')
assert(arr.length === 4,'可以一次添加多个')
