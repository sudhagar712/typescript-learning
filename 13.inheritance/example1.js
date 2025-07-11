//without inheritance 
// user class
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "hello ".concat(this.firstName, " ").concat(this.lastName, " ");
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
// admin class
var Admin = /** @class */ (function () {
    function Admin(firstName, lastName, age, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.role = role;
    }
    Admin.prototype.greet = function () {
        return "hello ".concat(this.firstName, " ").concat(this.lastName);
    };
    Admin.prototype.getAge = function () {
        return this.age;
    };
    Admin.prototype.getManage = function () {
        return "managable role should be , ".concat(this.role);
    };
    return Admin;
}());
var forUser = new User("john", "doe", 26);
console.log(forUser.greet());
console.log(forUser.getAge());
var forAdmin = new Admin("sudhagar", "msr", 28, "admin");
console.log(forAdmin.greet());
console.log(forAdmin.getAge());
console.log(forAdmin.getManage());
