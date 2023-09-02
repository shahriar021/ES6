//promise has 3 state .....resolve , reject , pending
//if resolve .then
//if reject .catch

// var result = new Promise((res, rej) => {
//    var n =  Math.floor(Math.random()*10);
//   if (n<5) {
//     return res();
//   } else {
//     return rej();
//   }
// }); 

// result
//   .then(function () {
//     console.log("successfull");
//   })
//   .catch(function () {
//     console.log("fail");
//   });


//-----------example 2

//vor 5 tay uthbo
//namaj porbo
//breakfast korbo
//gym e jabo


 var a =new Promise((res,rej)=>{
    return res("vor 5 tay uthbo");
 })

var b= a.then(function(data){
    console.log(data)
    return  new Promise((res,rej)=>{
        return res("namaj porbo");
    })
 })

var c =  b.then(function(data){
    console.log(data);
    return new Promise((res,rej)=>{
        return res("breakfast korbo")
    })
 })

 var d = c.then(function(data){
    console.log(data);
    return new Promise((res,rej)=>{
        return res("gym e jabo")
    })
 })

 d.then(function(data){
    console.log(data)
 })