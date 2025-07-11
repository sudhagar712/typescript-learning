// without class 
var user1 = { firstName: "sudhagar", lastName: "msr", age: 28 };
var user2 = { firstName: "Thivagar", lastName: "lol", age: 30 };
var greetUser = function (user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName, "  ");
};
var greetAge = function (user) {
    return "my age is ".concat(user.age);
};
console.log(greetUser(user1));
console.log(greetAge(user1));
console.log(greetUser(user2));
console.log(greetAge(user2));
