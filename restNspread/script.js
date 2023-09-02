///spread operator is used to spread out the elements of an array
// rest operator is used to merge a list of function arguments into an array
//they both use the same operator: ...
//but they are different

const a = [1,5,9,5,4,6,10]
const b=[...a]
console.log(b)



// rest

function rest (a,b,c,...d){
    console.log(a,b,c,d)
}

rest(100,200,300,500,900,700,800,1000)