/*
Cloning object using spread operatior (...). This is Partially Deep Copy
This way is not usefull for nested object. So, here deep copy works for only first level.

Output:     BEFORE Obj1:  { name: 'Aniket', location: { city: 'Kolkata' } }
            BEFORE Obj2:  { name: 'Aniket', location: { city: 'Kolkata' } }
            AFTER  Obj1:  { name: 'Raja', location: { city: 'Labpur' } }
            AFTER  Obj2:  { name: 'Aniket', location: { city: 'Labpur' } }
*/

const obj1 = {name: 'Aniket', location: {city: 'Kolkata'}};
// Cloning object using spread operatior
const obj2 = {...obj1};

console.log('BEFORE Obj1: ', obj1);
console.log('BEFORE Obj2: ', obj2);

obj1.name = 'Raja';
obj1.location.city = 'Labpur';

console.log('AFTER Obj1: ', obj1);
console.log('AFTER Obj2: ', obj2);