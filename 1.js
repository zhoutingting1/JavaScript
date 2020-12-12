//函数的属性
function getStudent(name,gender){
    return '';
}
console.log(getStudent.length)    //输出2


//...剩余参数
function getStudent(name,...gender){
    return '';
}
console.log(getStudent.length)


const getStudent2=function(){
    return '';
}
console.log(getStudent.name)
console.log(getStudent.prototype)


//call()
function add(c,d){
    console.log(this.a + this.b + c + d);
}
add(3,4);    //等同于add.call(undefined,3,4); this是全局对象

let num = {a:1,b:2};
add.call(num,3,4)


const person = {
    name:"zeng",
    say:function(){
        return `你好，我是${this.name}`;
    },
};
function moreSay(age,hobby){
    console.log(`${this.say()},我${age}岁，喜欢${hobby}`);
}
moreSay.call(person,20,"看小说");


//call命名规则
var lastName = "global_name";
const func = function(firstName){
    return firstName + " " +this.lastName;
};
var person ={
    lastName:"person_name",
};
let a = func("zeng");
console.log(a);

let b = func.call(person,"zeng");
console.log(b);

let c = func.call();
console.log(c)

let d = func.call(null,"zeng");
console.log(d)

let e = func.call(undefined,"zeng");
console.log(e);

//apply()

let array = ['a','b'];
let elements = [0,1,2];

let a = [...array,...elements];
console.log(a);    //[ 'a', 'b', 0, 1, 2 ]

array.push.apply(array,elements);
console.log(array);   //[ 'a', 'b', 0, 1, 2 ]

//方法借用
const numbers = [5,6,2,3,7];
let max = Math.max.apply(null,numbers);
console.log(max);   //7


//bind() 绑定
var small ={
    a:1,
    go:function(b,c,d){
        console.log(this.a+b+c+d);
    },
};
var large ={
    a:100,
};
small.go(2,3,4);  //10

small.go.call(large,2,3,4);  //109

let bindTest1 = small.go.bind(large,2,3,4);
bindTest1();    //109

let bindTest2 = small.go.bind(large,2,3);
bindTest2(4);    //109

let bindTes3 = small.go.bind(large,2);
bindTest3(3, 4);     //109


const person ={
    age:20,
    getNameAndAge:function(name){
        return name + " " + this.age;
    },
};
//直接调用
person.getNameAndAge("zeng");
//将方法的调用赋值给nameAndAge
const nameAndAge = person.getNameAndAge;
//通过引用nameAndAge，调用赋值给他的函数
nameAndAge("zeng");
const boundNameAndAge = nameAndAge.bind(person,"zeng");
boundNameAndAge();
//不带任何参数绑定
const boundNameAndAge = nameAndAge.bind();
boundNameAndAge("zeng");
//将‘this’设置为‘undefined’
const boundNameAndAge = nameAndAge.bind(undefined,"zeng");
boundNameAndAge();
//将‘this’设置为‘null’
const boundNameAndAge = nameAndAge.bind(null,"zeng");
boundNameAndAge();




//函数的toString()方法
const getStudent = function(){
    return 'zeng';
}
console.log(getStudent.toString());

console.log(Math.max.toString());

//Memoizaton
//求平方
function square(x){
    return x * x;
}

function square(x){
   square.cache = square.cache || {};
   if(!square.cache[x]){
       square.cache[x] = x*x;
   }
   return square.cache[x];
}
square(3);


//斐波那契数列
const fina = function(n){
    // if(n<2){
    //     return n;
    // }else{
    //     return fina(n-1) + fina(n-2);
    // }
    return n<2? n: fina(n-1) + fina(n-2);
};
console.time();
console.log(fina(40));
console.timeEnd();

//改写
const finaCache = function(n){
    finaCache.cache = finaCache.cache || {};
//     if(finaCache != undefined){
//         finaCache.cache = finaCache.cache;
//     }else{
//         finaCache = {};
//     }
    if( !finaCache.cache[n] ){
        finaCache.cache[n] = n < 2 ? n:finaCache(n-1) + finaCache(n-2);
    }
    return finaCache.cache[n];
}
finaCache(40);
console.time();
console.timeEnd();
let a = finaCache(40);
console.timeEnd();
console.log(a);

//IIFE
(function() {
    var temp = 2;
})();
console.log(temp);
//等同于es6
{
    const temp = 1;
}
console.log(temp);


//模块模式
var myModule = (function () {
    var myPrivatevar, myPrivateMMethod;
    myPrivatevar = 0;  //私有变量
    myPrivateMMethod = function(foo){
        //私有方法
        console.log(foo);
    };
    return {
        myPublicVar:"foo",  //公开变量
        myPublicFunction: function (bar){
            //公开方法
            myPrivatevar++;
            myPrivateMMethod(bar);
        },
    };
})();
myModule.myPublicFunction(2);
myModule.myPublicVar;



var myRevealingModule = (function (){
    var privateCounter = 0;
    function privateFunction (){
        privateCounter++;
    }
    function myPublicFunction(){
        publicIncrement();
    }
    function publicIncrement(){
        privateFunction();
    }
    function publicGetCount(){
        return privateCounter;
    }
    //暴露共有属性和方法，指向私有属性和方法
    return{
        start:myPublicFunction,
        increment:publicIncrement,
        count:publicGetCount,
    };
})();
myRevealingModule.start();
myRevealingModule.increment();
myRevealingModule.count();




//closure闭包
function outerFunc(){
    let outerVar = "I am outside!";
    function innerFunc(){
        console.log(outerVar);
    }
    return innerFunc;
}
const myInnerFunc = outerFunc();
myInnerFunc();   //输出I am outside!6


//闭包的事件处理程序
let countClicked = 0;
myButton.addEventLiistener('click',function handleClick(){
    countClicked++;
    myText.innerText = `You clicked ${countClicked} times`;
});


//函数式编程（编程范式：命令式，声明式）







