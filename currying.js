function add(x) {
    return function(y) {
        return x + y
    }
}
 
const add = x => y => x + y;

(a, b) => (b || b === 0) ? a + b : (b) => a + b;

// Arity
// 1 = unary
// 2 = binary
// 3 = ternary
// 4 = quaternary