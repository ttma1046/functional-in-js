// const map = (cb, array) => array.map(cb);
const map = cb => array => 
{
    const temp = array;
    return Array.prototype.map.call(temp, cb); 
}

const arr = [1, 2, 3, 4, 5];
const double = n => n * 2;
// const withArr = map(arr);

// console.log(withArr(double));
// console.log(withArr(n => n * 3))
// console.log(arr.map(n => n * 4))

const withDouble = map(double);

console.log(withDouble(arr));
console.log(withDouble([2, 4, 6, 8, 10]));

// Most specific => least specific

const prop = key => obj => obj[key]

const propName = prop('name');

const people = [
    { name: 'Jamon' },
    { name: 'Shirley' },
    { name: 'Kent' }
]

// people.forEach(person => console.log(propName(person)))

console.log(map(propName)(people))