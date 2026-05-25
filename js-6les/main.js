"use strict"

const users = [
    { name: "Alex", age: 24, isAdmin: false},
    { name: "Bob", age: 13, isAdmin: false},
    { name: "John", age: 31, isAdmin: true},
    { name: "Jane", age: 20, isAdmin: false},
]

users.push({ name: 'Ann', age: 19, isAdmin: false, name: "Jack", age: 43, isAdmin: true})

console.log(users)


function getUserAverageAge(users) {
    let averageAge = 0;
    users.forEach((user) => {
        averageAge += user.age;
    });
    return averageAge / users.length;
}

console.log(getUserAverageAge(users));


function getAllAdmins(users) {
    const admins = [];
    users.forEach(user => {
        if(user.isAdmin === true) {
            admins.push(user);
        };
    });
    return admins;
};

console.log(getAllAdmins(users));


function first(array, n) {
    const newArray = []; 
    for (let i = 0; i < n; i++) {
        newArray.push(array[i]);
    };
    return newArray
}

console.log(first([10, 15, 33, 44, 666], 3));