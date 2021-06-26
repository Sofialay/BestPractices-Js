// code reference 

const calculateTotal = (items, options) => {
    let t = 0 
    // DON'T make this kind of names in variables, 
    // always use the most descriptive names posible
    items.forEach(element => { // if items is not iterable it would break
        t += element.price * element.quan
    });

    t = t - t * (options.discount || 0)
    t = t * 1.1 
    t = t + (options.ship || 5) 
    // if the ship property is 0 it will return 5 cause 0 its falsy
    return t
}

const testItems = [
    {
        price: 15,
        quan: 2
    },
    {
        price: 20,
        quan: 9
    },
    {
        price: 6,
        quan: 3
    },
]

console.log(calculateTotal([], {}))
console.log(calculateTotal(testItems, {}))
console.log(calculateTotal(testItems, {ship: 0}))
console.log(calculateTotal(testItems, {discount: 0.75}))

// refactoring 
const TAX_RATE = 1.1
const SHIPPING_DEFAULT = 5

const calculateTotalRefactor = 
    (items, { shipping = SHIPPING_DEFAULT, discount = 0 } = {}) // default to {} and destructuring values!
=> { 
    if(items == null || !items.length ) return 0

    const itemCost = items.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0) // -> this is total, the initial value

    const discountRate = 1 - discount

    return itemCost * discountRate * TAX_RATE + shipping
}

const testItems = [
    {
        price: 15,
        quan: 2
    },
    {
        price: 20,
        quan: 9
    },
    {
        price: 6,
        quan: 3
    },
]

console.log(calculateTotal([], {}))
console.log(calculateTotal(testItems, {}))
console.log(calculateTotal(testItems, {ship: 0}))
console.log(calculateTotal(testItems, {discount: 0.75}))