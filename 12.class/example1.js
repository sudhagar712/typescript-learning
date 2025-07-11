//class
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName, " ");
    };
    User.prototype.greetAge = function () {
        return "my age is ".concat(this.age);
    };
    return User;
}());
//create instance 
var user1 = new User("Sudhagar", "msr", 28);
console.log(user1.greet());
