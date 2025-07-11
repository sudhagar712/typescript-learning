var user1 = {
    firstName: "sudhagar",
    lastName: "Msr",
    age: 28,
    city: "puducherry",
};
var user2 = {
    firstName: "Thivagar",
    lastName: "Lol",
    age: 30,
    city: "puducherry",
};
var userFn = function (user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName, " Age is ").concat(user.age, " myCity ").concat(user.city, "  ");
};
console.log(userFn(user1));
console.log(userFn(user2));
