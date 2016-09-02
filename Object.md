# 对象(Object)

标签（空格分隔）： 未分类

---

在js中，除了原始值以外，所有的值都是对象。
对象可以包含多个值，以名值对形式表示，属性名是字符串(其他类型的值自动转换为字符串)。
对象还会从原型上继承属性，对象上的方法通常是继承而来的。
对象是引用类型

###创建对象
1、对象直接量    
对象直接量由若干个名值对组成。    
名值对通常称为属性(properties)。      
属性由`,`分割，最后一个逗号会被忽略，但ie中会报错。      
对象的写法类似java中的hashmap      
```js
var person = {
    name:'jack',
    age:18
}
```
在es6中，如果属性名和属性名表示的值相同，则允许对象属性简写      
es6中，属性名可以使用变量      
```js
var age = 19
var tagName = 'sex'
var person = {
    age,
    func(){
        return '简写的function';
    },
    [sex]:'male'
}
```
2、new操作符创建      
```js
var person = new Object();
person.name = 'jack';
```
3、使用构造函数创建      
new操作符后跟着一个构造函数，构造函数用于初始化一个新对象。      
通过构造函数，可以创建许多相同类型的函数      
```js
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFather = new person("John", "Doe", 50, "blue");
```
> `this`在对象中指代对象本身      


4、Object.create()      
ES5中的方法，接受两个参数，第一个为对象的原型，第二个为可选的参数，用于对对象属性做进一步描述      
> 原型：`prototpye`，在js中，所有的对象(除了null外)都与一个原型相关联，对象从原型中继承属性      
> 通过对象直接量创建的对象原型都指向Object.prototype      
> 通过构造函数创建的对象的原型指向构造函数的prototype的值      
> 所有对象都具有一个原型(prototype)，原型也是一个对象      
> Object.prototype在原型链的顶端      
> Date, Array, RegExp, Function....都继承自Object.prototype      

```js
var obj1 = Object.create(null)//不继承任何属性
var obj2 = Object.create({x:1})//继承了x属性
var obj3 = Object.create(Object.prototype)//与new Object相同
```

> 通常，都使用对象直接量`{}`创建一个对象。      
> 对象属于引用类型，而不是值类型      

###对象的属性
对象是一系列无序属性的集合      
属性通常可以添加，删除，修改，还有些属性是只读的      
1、属性的获取      
使用`.`号，此时右侧必须是属性名称的字符串，es3中不能使用关键字      
```js
obj.prop
```
使用`[]`，括号内必须是一个以字符串为结果的表达式，可以使用关键字作为返回字符串。      
这种方式与数组类似，只是使用字符串作文索引，通常我们称之为关联数组，js中所有对象都是关联数组      
```js
obj['prop']
```
使用for...in循环，可以遍历所有的属性名      
```js
var person = {fname:"John", lname:"Doe", age:25}; 
for (x in person) {
    console.log(person[x])
}
```
当访问一个不存在的属性时，会返回undefined      
当访问一个不存在的对象的属性时，程序会报异常      
null
```js
person.sex
```
小技巧:通过&&来获取属性      
```js
person.friend
```
Object.getOwnPropertyName()返回一个自有属性名称组成的数组      
Object.keys()返回一个由可枚举的自有属性名称组成的数组
2、属性设置      
```js
obj.name = 'jack';
```
下面几种情况下属性设置会失败
1、属性是只读的      
2、属性继承而来，且属性是只读的      
3、对象没有属性，且没有setter方法，这种情况下通常会将新属性加到对象      上去，但如果对象是不可扩展的，则不能定义新属性      

3、删除属性
使用`delete`关键字删除一个属性      
delete只能用于对象，对变量和函数没有效果      
delete不能删除系统预先定义好的属性      
delete不能删除继承的属性      
delete只是删除属性和对象的联系，不会删除属性中的属性      
```js
var obj={
    p:{
        x:1
    }
}
var x = obj.p
delete obj.p
x.x//1,没有删除
```
```js
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
delete person.age;  
```
4、getter和setter      
属性值可以用一两个方法来替代，它们就是getter和setter，由它们定义的属性称之为存取器属性，而数据属性只有一个简单的值      
只有getter则是只读属性      
只有setter时为只写属性，读取总会返回undefined      
同时拥有即为可读/写属性      
```js
//prop为可读可写，它为a的两倍
var o={
    a:1,
    get prop(){
        return a*2
    },
    set prop(value){
        a=value/2
        return
    }
}
```
###属性的继承
> 对象的一部分属性属于自有属性，还有一些继承自prototype      
> 向对象本身添加属性时，不会影响其他对象      
> 当向原型添加属性时，所有继承自原型的对象都将获得这个新属性      

```js
//w3school示例
function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");
myFather.nationality = "English";//修改属性本身
//for...in
person.prototype.nationality = "English";
//for...in
```

在es6中，新增了Object.setPrototypeOf()方法，可以显示的制定一个对象的原型      
```js
var goal = {
    x:1
}
var tag = {
}
Object.setPrototypeOf(tag,goal)
tag.x//1
```

###检测属性
判断对象是否包含某个属性，通常可以使用in、hasOwnProperty,propertyIsEnumerable      

in操作符会返回一个布尔值，存在则为true      
hasOwnProperty用于判断给定的名字是否为自有属性      
propertyIsEnumerable用于判断给定的名字是否为自有属性且为可枚举的      
```js
var o = {x:1}
'x' in o//true
'toString' in o//true
o.hasOwnProperty('x')//true
o.hasOwnProperty('toString')//false
```
###属性的特性
es5为属性新增了可写、可枚举、可配置的特性。      
1、获取属性的特性      
可以通过getOwnPropertyDescriptor获取属性的描述符。      
```js
Object.getOwnPropertyDescriptor(obj,'x')
```
getOwnPropertyDescriptor只能用于获取自生的属性，要获取原型链上的属性，需要用到getPrototypeOf()      

2、属性特性的设置      
```js
var obj = {}
Object.defineProperty(obj,'x',{
    value:1,
    writable:true,
    enumerable:false,
    configurable:true
})
```
defineProperty创建的属性不必包含全部的特性。新创建的属性特性都是false和undefined      
###序列化
es5提供了对象序列化的方法。      
1、序列化      
JSON.stringify()用于将对象转换为字符串。      
NaN、Infinity将转换为null，Date类型会调用toJSON()      
2、反序列化      
JSON.parse()用于将字符串解析为对象。      
它将保留字符串形态，日期字符串不会被转换为原始日期对象。      

###对象的方法
1、toString      
默认的toString将返回'[object Object]'字符串，这在实际工作中不会有太多的用处，通常需要自定义的方法。      
2、toLocalString      
用于本地化操作，对象调用Object本身的toString方法，Date和Number对本地化方法做了定制，      
3、valueOf      
当对象需要转换为原始值的时候将调用valueOf方法。比如Date.valueOf()会转换为毫秒数      

4、assign(es6)            
此方法可以将原来对象的属性复制到一个目标对象上,并返回一个目标对象的引用,这个对象是目标对象的一个浅拷贝      
```js
var ainimal={
    live:'earth',
    speak(){
        console.log('ainimal speaking')
    }
}
var cat = {
}
var cc = Object.assign(cat,ainimal)
cat.name = 'jack'
cat === cc//true
cat.name//'jack'
```
5、is(es6)      
此方法用于判断两个值是否相同      
```js
var a = '123',b='123'
Object.is(a,b)//true
Object.is({},{})//false引用的地址不同
```




























