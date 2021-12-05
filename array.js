// js 数组方法

// 1、join()
// 将数组用给定的连接符连接成字符串，默认连接符为逗号(,)，并返回字符串

let arr=[1,2,3]
console.log(arr.join());
console.log(arr.join("-"));
console.log(arr.join(""));
console.log(arr);


// 2、push(),pop(),shift(),unshift()(修改原数组)
// push():将括号内的内容添加到数组末尾，并返回修改后的长度
// pop():移除数组最后一项，返回移除的值，length-1
// unshift():将括号内的内容添加到数组队首，并返回修改后的长度
// shift():移除数组第一项，返回移除的值，length-1
console.log(arr.push(4));
console.log(arr);
console.log(arr.pop());
console.log(arr);

console.log(arr.unshift(0));
console.log(arr);
console.log(arr.shift());
console.log(arr);


// 3、sort()(修改原数组)
// 将数组中的项目从小到大排序，***（比较字符串）
let arr2 = ['a','d','b','c']
console.log(arr2.sort())
console.log(arr2)
// 若想排序数字，需添加排序一个排序函数，return<0时，b会被移动到a前面
let arr3=[2,55,32,56,34,156]
console.log(arr3.sort())
console.log(arr3.sort((a,b)=>{
    return a-b
}))

// 4、reverse()(修改原数组)
// 反转数组顺序
let arr4=[1,2,3,4,5,9,0]
console.log(arr4.reverse())

// 5、concat()
// 多个数组的合并，先创建一个数组的副本，再将参数添加到数组副本的末尾并返回这个新的数组。
// 参数可为单一元素（可以为对象）或数组
// 若没有传参，其作用相当于复制数组(拷贝)。
let arr5 = [0]
console.log(arr5.concat(5,[2,3,5,[2]],{a:1}))

// 6、slice()
// 返回从原数组制定开始下标到结束下标间的元素组成的新数组(不包括end元素)。
// 只有一个参数时返回起始位置到数组末尾的元素
// 参数为负数时会转换为负数加length的值
// 若转换后的start大于end，返回空数组
let arr6 = [1,3,5,7,9,11,13]
console.log(arr6.slice(2))
console.log(arr6.slice(2,5))
console.log(arr6.slice(2,-1))
console.log(arr6.slice(-4,-1))
console.log(arr6.slice(-1,-4))

// 7、spice()(修改原数组)
// 删除、修改、添加，返回删除的元素组成的数组
// array.splice(index,howmany,item1,.....,itemX)
// index:从何处添加/删除元素（下标）
// howmany：可选，要删除的个数，若未规定则删除后续所有元素
// item:可选，需要插入的元素
let arr7 = [1,3,5,7,9,11,13]
console.log("splice")
console.log(arr7.splice(2,1))
console.log(arr7)
console.log(arr7.splice(2,0,5))
console.log(arr7)
console.log(arr7.splice(1))
console.log(arr7)
console.log(arr7.splice(0,1,1,2,3))
console.log(arr7)

// 8、indexOf()和lastIndexOf()
// indexOf():返回匹配到的元素的第一个下标，若匹配不到则返回-1（数组中为===匹配）
// lastIndexOf()：返回最后一个下标
// indexOf(searchElement, fromIndex)，lastIndexOf(searchElement, fromIndex)
// searchElement必须，需要搜索的元素
// fromIndex，可选，从哪个下标开始(向后/向前)搜索
let arr8 = [1,3,5,5,5,6,4,5,6,7,7,5,3,1]
console.log(arr8.indexOf(5))
console.log(arr8.lastIndexOf(5))
console.log(arr8.indexOf(5,5))
console.log(arr8.lastIndexOf(5,5))
console.log(arr8.indexOf("5"))//不会隐式转换

// 9、forEach()
// 对数组进行遍历，并运行给定函数，forEach没有返回值，默认传参为(currentValue, index, arr)
// array.forEach(function(currentValue, index, arr), thisValue)
let arr9 = [1,2,3,4]
arr9.forEach((x,index,a)=>{
    console.log(x + '|' + index + '|' + (a === arr9));
})

// 10、map()
// 对数组进行遍历，并运行给定函数，然后返回一个新数组
// array.map(function(currentValue,index,arr), thisValue)
let arr10 = [1,2,3,4,5]
console.log(arr10.map((x)=> x*2))
console.log([1,2,3].map(parseInt))//默认传参(currentValue,index)

// 11、filter()
// 返回符合条件的元素组成的新数组
// array.filter(function(currentValue,index,arr), thisValue)
// 当function中的返回值为true时留下该元素
console.log(arr10.filter((x)=> x>2))

// 12、every(), some()
// 数组中每一项（存在一项）满足条件时返回true，否则返回false
console.log(arr10.every(x=> x>4))
console.log(arr10.some(x=> x>4))
