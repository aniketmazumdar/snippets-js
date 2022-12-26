/*
Cloning object using JSON.stringify & JSON.parse method. This is pure Deep Copy

Output:     BEFORE Obj1:  {name: 'Aniket', location:{ city: 'Kolkata', landmark:{l1: 'Durga Mandir'}}}
            BEFORE Obj2:  {name: 'Aniket', location:{ city: 'Kolkata', landmark:{l1: 'Durga Mandir'}}}
            AFTER  Obj1:  {name: 'Raja', location:{ city: 'Labpur', landmark:{l1: 'Post Office'}}}
            AFTER  Obj2:  {name: 'Aniket', location:{ city: 'Kolkata', landmark:{l1: 'Durga Mandir'}}}
*/

const obj1 = {name: 'Aniket', location: {city: 'Kolkata', landmark:{l1: 'Durga Mandir'}}};
// Cloning object using JSON.stringify & JSON.parse method
const obj2 = JSON.parse(JSON.stringify(obj1));

console.log('BEFORE Obj1: ', obj1);
console.log('BEFORE Obj2: ', obj2);

obj1.name = 'Raja';
obj1.location.city = 'Labpur';
obj1.location.landmark.l1 = 'Post Office';

console.log('AFTER  Obj1: ', obj1);
console.log('AFTER  Obj2: ', obj2);