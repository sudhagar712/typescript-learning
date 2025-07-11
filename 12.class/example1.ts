//class

class User {
    firstName:string;
    lastName:string;
    age:number

    constructor(firstName:string, lastName:string, age:number){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    greet(){
        return `Hello ${this.firstName} ${this.lastName} `
    }

    greetAge(){
        return  `my age is ${this.age}`
    }
}

//create instance 

let user1 = new User("Sudhagar", "msr", 28)

console.log(user1.greet())



