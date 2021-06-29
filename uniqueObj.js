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