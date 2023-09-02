//old js 3 type er function thake 1.function expression 2.function statement 3.anonymous function
//new js 1 type er function thake arrow function
//1.basic arrow function

    var a=()=>{

    }

//2.arrow function with 1 parameter
 
var b = (param)=>{}
b(10)

var b = param => {};//caile parameter er moddhe () use korte hobe na
b(10);

var b = (param,param2)=>{}//2 ta parameter hole () use korte hobe and 2 ta parameter pass kete hbe 
b(10,20)
//3.arrow function with implicit return

var c = ()=>100;

console.log(c())

