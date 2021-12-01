var name = 222;
var a = {
    name: 111,
    say: function(){
        console.log(this.name);
    }
}

var fun = a.say;
fun()//222 fun.call(window)
a.say()//111 a.say.call(a)

var b = {
    name: 333,
    say: function(fun){
        fun();//相当于copy了a.say
    }
}
b.say(a.say); //222
b.say = a.say;
b.say(); //333 b.say.call(b)



//箭头函数中的this在定义时绑定
//箭头函数没有自己的this，内部this就是外层代码块(父级)的的this，所以不能用作构造函数

var x = 11;
var obj = {
    x: 22,
    say: ()=>{
        console.log(this.x);
    }
} 
obj.say();//11