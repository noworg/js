# 数组(Array)

标签（空格分隔）： js

---

##数组
数组是值的有序集合，每个元素都有一个索引，通过索引可以获取数组元素。                 数组元素可以是任意类型的。

###创建数组
1、使用数组直接量       
```js
var arr = []//空数组
var type = [1,2,4,5]//简单数组
var complex = [1,'jack',false,[1,2,3]]//复杂数组
var two = [[1,2,3],[4,5,6]]//二维数组
```      
创建数组可以省略某个值，有省略值的数组会被当作稀疏数组      
```js
var a = [1,,3]
var b = [1,,,]//只有三个元素，最后一个逗号会被省略
```      
2、new操作符      
new 一个Array对象      
```js
var arr = new Array()
var arr1 = new Array(10)//只有1个参数时，则显示的指定数组的长度
var arr2 = new Array(1,4,6,7)
```      
> 通常都是直接使用数组直接量创建对象      

###数组元素的读写      
1、读写      
数组索引从0开始，使用`[]`读写数组      
```js
var arr = [1,2]
arr[0]//1 读
arr[2] = 3//写
```      
2、length      
数组有一个特殊的属性length，表示数组中元素的个数      
```js
var arr = [1,3,4]
arr.length//3
```      
可以手动设置length      
```js
arr.length = 4 //arr=[1,3,4,undefined]／／数组会在后面加速undefined
arr.length = 2//arr＝[1,3]//数组将会删除超出索引的值
```      
###数组添加元素
1、可以直接给指定的位置赋值      
```js
arr[1] = 2
```      
2、使用push在数组结尾添加一个元素      
```js
arr.push(3)
```      
3、使用数组元素length      
```js
arr[arr.length] = 11//尽量不要使用
```      
4、unshift在数组头部添加一个元素，所有数组元素索引自动加一      
```js      
arr.unshift(0)
```      
###数组元素的删除
1、pop删除最后一个元素，数组元素索引自动减一      
```js      
var arr = [1,2,3,4]
arr.pop()//arr=[1,2,3]
```      
2、shift删除数组的头部元素      
```js
arr.shift()//arr=[2,3]
```      
3、delete删除一个元素，只是将该位置设为undefined，不会影响数组的长度      

```js
var arr = [1,2,4]
delete arr[1]
1 in arr//false
a.length//3
```      
###数组遍历
1、使用for循环      
```js
for(var i=0,l=arr.length;i<l;i++){
    arr[i]
}
```      
2、for...in
```js
for(var index in arr){
    arr[index]
}
```      
###与对象的关系
数组继承自对象，数组拥有对象的方法      
当使用命名的索引时，将会把数组当做标准的对象，数组的方法都不适用于命名对象      
```js
var arr = []
arr['name'] = 'jack'
arr.length//0
arr[0]//undefined
arr['name']//jack
arr.name//jack
```
###数组检测
当使用typeof检测数组时返回的是对象      
1、instanceof 基于原型的判断      
```js      
arr instanceof Array//true
```      
2、Array.isArray()      
```js
Array.isArray(arr);
```      
3、构造函数      
```js
arr.constructor.toString().indexOf("Array") > -1;
```      
###类数组
数组拥有其他对象没有的方法      
1、拥有length属性，删除添加等操作会自动更新length属性      
2、拥有Array.prototype的方法      
3、类属性为Array      
上面的特性让数组有别于其他对象，但不是定义数组的本质特征      
通常，我们把拥有一个非负整数的属性称为类数组，这类数组不能直接调用数组方法，但是本身对遍历支持的很好      
函数实参argument就是一个类数组      
```js
function fn(x,x,z){
    argument.length
    //TODO ...
}
fn(1,2,3)
```      
通过call，可以显示的调用Array.prototype的方法      
```js
var a = {}
a[1] = 1
a[2] = 2
a.length = 1
Array.prototype.join.call(a,'-')
```
###遍历器
//TODO
###数组方法
1、`join`将所有的数组元素转换为字符串并连接在一起      
```js
var arr = [1,2,3]
arr.join('-')//1-2-3
```      
2、`concat`连接两个或两个以上的数组,concat不修改数组本身      
```js
var arr = [1,2,3]
arr.concat(4)//return [1,2,3,4]
arr.concat([4,5])//return [1,2,3,4,5]
arr.concat([4],[5])//return [1,2,3,4,5]
```      
3、`every`和`some`      
every判断是否所有数组元素都满足判定条件。      
every和some接受两个参数      
第一个参数为判定函数，当函数返回false时，停止调用,函数的参数为value、index、arr，value表示遍历到当前元素的值，index表示索引，arr表示数组本身，这是es5操作数组常见的方法。      
第二个参数显示的指定函数的this值      
```js
var arr = [1,2,3]
var res = arr.every(function(value，index,arr){
    return value < 4
})
res //true
```      
some只要有任意元素满足判定条件即可，当返回true停止调用      
```js
var arr = [1,2,3]
var res = arr.some(function(value，index,arr){
    return value > 2
})
res //true
```      
4、`reverse`对数组进行逆序操作
```js
var arr = [1,2,3]
arr.reverse()
```      
5、`sort`排序
默认按字母顺序排序，undefined会被排到最后      
当比较的是number类型时，按照字母表排序4比33要大      
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); 
```      
可以为sort传递一个比较函数，当函数返回值大于0时，函数第一个参数在后，小于0时，函数第一个参数在前      

```js
var arr = [33,32,4]
arr.sort()//arr=[32,33,4]
arr.sort(function(a,b){
    return a-b//从小到大排序，a>b时，b在前，a<b时，a在前(即小的在前)
})
arr = [4,32,33]
arr.sort(function(a,b){
    return b-a//从大到小排序，b>a时，b在前，b<a时，a在前(即大的在前)
})
arr = [33,32,4]
```      
6、`slice`返回数组的子数组      
slice接受两个参数      
第一个参数为子数组的开始位置，参数可选，没有则为0      
第二个参数为子数组的结束位置，参数可选，没有则为数组的尾部      
参数为负数时，表示从后往前，-1表示最后一个数       
该方法不会修改原来的数组      
```js      
var arr = [4, 32, 33]
arr.slice(1,-1)
arr//[32]
```      
6、`splice`用于插入或删除数组元素      
splice接受两个参数      
第一个参数为数组操作的位置      
第二个参数是可选的，表示删除元素的个数      
后面的参数列表是可选的，表示添加到数组中的若干元素      
该方法会修改原来的数组      
```js
var arr = [1,2,3]
arr.splice(1,0,5,6)//插入元素
arr//arr=[1,5,6,2,3]
arr.splice(1,2)//删除元素
arr//arr=[1,2,3]
arr.splice(1,1,5,6)//元素替换
arr//arr=[1,5,6,3]
```      
7、`toString`、`toLocalString`      
toString将数组元素以逗号连接起来，拼接成字符串      
toLocalString包含了数组的本地化操作      
```js
var date = new Date()
var arr = [12,date]
arr.toString()
arr.toLocalString()
```      
8、`forEach`用于遍历数组      
forEach参数为一个函数，forEach遍历数组时，数组中的每个元素都会调用该函数。函数接受三个参数，分别是数组当前元素、元素的索引、数组本身      
第二个参数显示的指定函数的this值      
```js
var arr = [1,2,3]
arr.forEach(function(value,index,row){
    //TODO ...
})
```      
9、`map`用于遍历数组并返回一个新数组      
map接受两个参数      
第一个参数为一个函数，函数接数组当前元素、元素的索引、数组本身作为参数      
第二个参数显示的指定函数的this值      
map不会修改原数组      
```js
var arr = [1,2,3]
arr.map(function(value,index,row){
    //TODO ...
    return //...
})
```
10、`filter`用于过滤数组      
filter接受两个参数      
第一个参数为筛选函数，返回true时，元素会被添加到子集中，filter会跳过undefined和null      
第二个参数显示的指定函数的this值      
```js
var arr = [1,2,3]
arr.filter(function(value){
    if(value%2){
        return true//返回奇数
    }
    return false
})
```      
11、`reduce`、`reduceRight`
reduce用于从左到右合并数组值      
reduceRight用于从右到左合并数组值      
reduce和reduceRight接受三个参数      
第一个参数为合并函数，函数接受四个参数，第一个函数为当前数组的合并值，第2-4个参数分别为当前的value、索引index和数组本身row      
第二个参数为初始化参数，用于初始化开始时的合并值，参数可选，为空时使用数组第一个元素作为初始值，空数组会造成异常      
第三个参数显示的指定函数的this值      
```js
//数组求和
var arr = [1,2,3]
var res = arr.reduce(function(previousValue, currentValue){
    return previousValue+currentValue
})
res//6
```      
12、`indexOf`、`lastIndexOf`      
indexOf和lastIndexOf搜索数组中指定值的元素，如果存在则返回元素的索引，不存在则返回-1，indexOf从左到右搜索，lastIndexOf从右到左搜索      
indexOf和lastIndexOf接受两个参数      
第一个参数为需要查询的值      
第二个参数为搜索的开始位置      
```js
var arr = [1,2,3,1]
arr.indexOf(1)//0
arr.indexOf(1,1)//3
arr.lastIndexOf(1)//3
```      

13、`from`用于将一个类数组转换成真正的数组      
from接受三个参数      
第一个参数为类数组，当它为一个真数组时，简单的返回它本身      
第二个参数为一个类数组的处理函数，将返回值作为新数组的元素      
第三个参数显示的指定函数的this值      
```js
var obj = {
    '1':1,
    '2':2,
    '3':3,
    length:3
}
Array.from(obj,function(value,index){
    //TODO ...
    return value
})
```      
14、`of`使用指定的数据创建一个数组      
of的参数为要创建的数组的元素，它可以是任意类型的，of与new Array的区别是new Array的只有一个参数时，参数为数组的长度，of不管多少个参数都是数组元素      

```js
var arr = Array.of(1,2,3)//arr=[1,2,3]
```      
15、`copyWithin`用于数组内元素的相互替换      
copyWithin接受三个参数      
第一个参数为被替换的元素的索引      
第二个参数为用于替换的元素索引的开始位置      
第三个参数是可选的，为用于替换的元素索引的结束位置，为空时，表示到数组结束位置      
```js
var arr = [1,2,3,4,5]
arr.copyWithin(0,3,4)//arr=[4,2,3,4,5]
```      
16、`find`、`findIndex`      
find与findIndex用于查找数组是否存在满足判定条件的值      
find与findIndex接受两个参数      
find与findIndex第一个参数为判定函数，判定函数当返回true时，停止遍历，find返回当前的元素值，findIndex返回当前索引
第二个参数显示的指定函数的this值      
```js
var arr = [1,2,3,4]
var res = arr.find(function(value,index,row){
    if(value%2==0){
        return true
    }
})//res=2
var res1 = arr.find(function(value,index,row){
    if(value%2==0){
        return true
    }
})//res1=1
```      
17、`fill`用于将数组指定区域的值替换成特定的值      
fill接受三个参数      
第一个参数为用于替换的值      
第二个参数为数组待替换的开始位置      
第三个参数为数组待替换的结束位置，参数可选，为空表示到数组结束位置      
```js
var arr = [1,2,3,4]
arr.fill(8,1,2)//arr=[1,8,2,3]
```      

















