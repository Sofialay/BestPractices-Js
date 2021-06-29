// Getting a unique value of arrays

const users = [
    "Pam",
    "John",
    "Dwight",
    "Michael",
    "Jim",
    "Jim",
    "Jim"
]

const unique = Array.from(new Set(users));

console.log(unique)

//output: ["Pam", "John", "Dwight", "Michael", "Jim"]

// Array to object

const arr = [
    "Pam",
    "John",
    "Dwight",
    "Michael",
    "Jim",
    "Jim",
]

const arrToObj = {...arr}

// Object to array

const users = {
    name: 'Sofia',
    ocupation: 'Front End Dev',
    hobbies: 'taking photos'
}

const toArr = Object.keys(users) //output: ['name', 'ocupation', 'hobbies']
const toArr = Object.values(users) //output: ['Sofia', 'Front End Dev', 'taking photos']