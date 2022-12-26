var v = 'apple';
let l = 'apple';
const c = 'apple';

console.log('GLOBAL SCOPE => v:', v);
console.log('GLOBAL SCOPE => l:', l);
console.log('GLOBAL SCOPE => c:', c);
console.log('---------RE DECLARE IN FUNCTION SCOPE---------');

function fn1(){
  var v = 'berry';
  let l = 'berry';
  const c = 'berry';

  console.log('FUNC SCOPE-1 => v:', v);
  console.log('FUNC SCOPE-1 => l:', l);
  console.log('FUNC SCOPE-1 => c:', c);
  console.log('-----------------------------------');
}
fn1();

console.log('GLOBAL SCOPE => v:', v);
console.log('GLOBAL SCOPE => l:', l);
console.log('GLOBAL SCOPE => c:', c);
console.log('---------RE ASSIGN IN FUNCTION SCOPE---------');

function fn2(){
  v = 'lemon';
  l = 'lemon';
  // c = 'lemon';       // TypeError
  
  console.log('FUNC SCOPE-2 => v:', v);
  console.log('FUNC SCOPE-2 => l:', l);
  console.log('FUNC SCOPE-2 => c:', c);
  console.log('-----------------------------------');
}
fn2();

console.log('GLOBAL SCOPE => v:', v);
console.log('GLOBAL SCOPE => l:', l);
console.log('GLOBAL SCOPE => c:', c);