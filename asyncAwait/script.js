

function abcd(){
    var raw = fetch("https://randomuser.me/api")
    .then(function(raw){
       return   raw.json();
    })
    .then(function(rawJson){
        console.log(rawJson)
    });
}

abcd();


//now i'll use async await

async function abcd() {
  var raw = await fetch("https://randomuser.me/api")
    var finalAns = await raw.json();
        console.log(finalAns)
}

abcd();

//1 await remove 1 row
//async --nearest function
//async hlei await thkte hbe