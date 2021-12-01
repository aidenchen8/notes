// 预编译
// 1、创建AO对象 
// 2、找形参和变量的声明 
// 3、实参和形参相统一 
// 4、找函数声明 会覆盖变量的声明

function fn(a,c){
    console.log(a);//function a()
    var a = 123;
    console.log(a);//123
    console.log(c);//function c()
    function a(){ }
    if(false){
        var d = 678;
    }
    console.log(d);//undefined
    console.log(b);//undefined
    var b = function(){ }//此为函数表达式，所以在此之前的b为undefined
    console.log(b);//functon ()
    function c(){ }
    console.log(c);//function c()
}
fn(1,2);