function addNumbers(a, b) {
    if (typeof a != "number" || typeof b != "number")
        throw new TypeError("Must provide numbers!");
    return a + b
    
}
export {
    addNumbers
}