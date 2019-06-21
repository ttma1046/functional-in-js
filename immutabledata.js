// Immutable Data

// Mutable = can be changed after creation
// Immutable = can't be changed after creation

const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a);


const c = { foo: 'bar' };
const d = c;
d.foo = 'baz';
console.log(c.foo);


const push = val => array => {
    const newArr = [...array]
    newArr.push(val)
    return newArr
  }

const num1 = [1,2,3];
const num2 = push(4)(num1);
console.log(num1);
console.log(num2);



const t = [{ name: 'test'}, {name: 'test1'}, {name: 'test2'}];
const s = push({name: 'test3'})(t);
console.log(t);

console.log(s);
console.log(t === s);

t[0].name = 'test4';
console.log(t);
console.log(s);