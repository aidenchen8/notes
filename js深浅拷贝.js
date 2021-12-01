// 赋值引用同一个地址块
// 浅拷贝开辟新的内存，并拷贝基本数据类型，不拷贝引用数据类型
// 深拷贝拷贝所有

var a = 123;
var obj = {};

var person = {
    name: "张三",
    hobby: ['学习',['看电影','购物'],'跑步']
}

var person1 = person; //赋值


//浅拷贝
//实现方法：
// Object.assign(target, source)
// ...展开运算符
// Array.prototype.concat
// Array.prototype.slice
function shallowCopy(obj){
    var target = {};
    for (let i in obj){
        if(obj.hasOwnProperty(i)){
            target[i] = obj[i];
        }
    }
    return target;
}

var person2 = shallowCopy(person);//浅拷贝

//深拷贝
//实现方法：
// JSON.parse(JSON.stringify());//无法拷贝function （包括RegExp）
// 递归 
// $.extend
function deepClone(obj){
    var target1 = new obj.constructor();

    //递归出口
    if(obj === null) return obj;//typeof null = "Object"
    if(obj instanceof Date) return new Date(obj);//Date拷贝需要new
    if(obj instanceof RegExp) return new RegExp(obj);//RegExp拷贝需要new
    if(typeof obj !=="object") return obj;

    for (let i in obj){
        if(obj.hasOwnProperty(i)){
            target1[i] = deepClone(obj[i])
        }
    }
    return target1;
}

var person3 = deepClone(person);
person.name = '王二';
person.hobby[0] = '玩耍';
console.log(person,person.hobby)
console.log(person1,person1.hobby)
console.log(person2,person2.hobby)
console.log(person3,person3.hobby)
// 输出
// {name: '王二', hobby: Array(3)} (3) ['玩耍', Array(2), '跑步']
// {name: '王二', hobby: Array(3)} (3) ['玩耍', Array(2), '跑步']
// {name: '张三', hobby: Array(3)} (3) ['玩耍', Array(2), '跑步']
// {name: '张三', hobby: Array(3)} (3) ['学习', Array(2), '跑步']


