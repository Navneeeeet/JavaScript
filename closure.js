/*
What is a Closure?

Closure is a Combination of a function and its lexical environment, or scope.This allow the inner function 
to access and remembera variable from outside of its scope.This memory retention ability is why closure are
often used for state preservation.
*/

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
