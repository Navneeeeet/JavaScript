function outer(){
let a=0;
function inner(){
a+=1;
console.log(a);
}
return inner;
}
const inner=outer();
inner();
inner();
inner();
