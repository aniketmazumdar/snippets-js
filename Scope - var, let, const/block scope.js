var v = 'apple';
let l = 'apple';
const c = 'apple';
 
console.log('GLOBAL SCOPE => v:', v);
console.log('GLOBAL SCOPE => l:', l);
console.log('GLOBAL SCOPE => c:', c);
console.log('---------RE DECLARE IN BLOCK SCOPE---------');

if(true){
  var v = 'orange';
  let l = 'orange';
  const c = 'orange';
 
  console.log('BLOCK SCOPE-1 => v:', v);
  console.log('BLOCK SCOPE-1 => l:', l);
  console.log('BLOCK SCOPE-1 => c:', c);
  console.log('-----------------------------------');
}

console.log('GLOBAL SCOPE => v:', v);
console.log('GLOBAL SCOPE => l:', l);
console.log('GLOBAL SCOPE => c:', c);
console.log('---------RE ASSIGN IN BLOCK SCOPE---------');

if(true){
  v = 'grapes';
  l = 'grapes';
  // c = 'grapes';       // TypeError
 
  console.log('BLOCK SCOPE-2 => v:', v);
  console.log('BLOCK SCOPE-2 => l:', l);
  console.log('BLOCK SCOPE-2 => c:', c);
  console.log('-----------------------------------');
}

console.log('GLOBAL SCOPE => v:', v);
console.log('GLOBAL SCOPE => l:', l);
console.log('GLOBAL SCOPE => c:', c);