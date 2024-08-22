function areSameType(a, b) {
    return typeof a === typeof b;
}

console.log(areSameType(10, 'hello')); // Output: false (number vs string)
console.log(areSameType(true, false)); // Output: true (boolean vs boolean)
console.log(areSameType({}, [])); // Output: false (object vs object)
