const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyby: 5,
    multiply() {
        return this.numbers.map((num)=>num*this.multiplyby);
    }
}
console.log(multiplier.multiply());