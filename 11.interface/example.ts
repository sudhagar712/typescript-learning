
interface User {
    firstName: string;
    lastName:string,
    age:number;
    city:string;
    isActive?:boolean
}




const user1 = {
    firstName: "sudhagar",
    lastName:"Msr",
    age:28,
    city:"puducherry",
  
}

const user2 = {
  firstName: "Thivagar",
  lastName: "Lol",
  age: 30,
  city: "puducherry",
};


let userFn = function (user:User) {
    return `Hello ${user.firstName} ${user.lastName} Age is ${user.age} myCity ${user.city}  `
}



console.log(userFn(user1))
console.log(userFn(user2));



