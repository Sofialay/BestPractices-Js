// code reference
const numberToAccString = (number) => {
    if(number !== null) {
        if(number < 0) {
            return `(${Math.abs(number)})`
        }else {
            return number.toString()
        }
    }
}

console.log(numberToAccString(undefined))
console.log(numberToAccString(20))
console.log(numberToAccString(-5))

// refactoring 
const numberToAccStringRefactor = (number) => {
    if(number !== null) return
    if(number < 0) return `(${Math.abs(number)})`
    return number.toString()
}

console.log(numberToAccStringRefactor(undefined))
console.log(numberToAccStringRefactor(20))
console.log(numberToAccStringRefactor(-5))