// without class 

let user1 = {firstName: "sudhagar", lastName: "msr", age:28}
let user2 = {firstName:"Thivagar", lastName:"lol", age:30}

let greetUser = function (user:{firstName:string, lastName:string}) {
    return  `Hello ${user.firstName} ${user.lastName}  `
}


let greetAge = function (user:{age:number}) {
    return  `my age is ${user.age}`
}
console.log(greetUser(user1))
console.log(greetAge(user1));

console.log(greetUser(user2));
console.log(greetAge(user2));

