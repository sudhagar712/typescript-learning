// Inheritance -- 

class Person {
  firstName : string;
  lastName:string;
  age:number

  constructor(firstName:string, lastName:string, age:number){
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
  }


  greet(){
    return  `Hello my name is ${this.firstName} ${this.lastName} my age is ${this.age} `
  }
}

//normal user 

class User extends Person {
  constructor(firstName: string, lastName: string, age: number){
    super (firstName , lastName, age)
  }
} 


class Admin extends Person {
  role: string
  constructor(firstName: string, lastName: string, age: number, role:string) {
    super(firstName, lastName, age);
    this.role = role
  }

  greetAdmin(){
    return  `${this.firstName} ${this.lastName} role ${this.role}`
  }
}


let user1 = new User ("sudhagar", "msr", 28)
let user2 = new User("thivagar", "lol", 29)


let Admin1 = new Admin("ram", "kumar", 30, "Admin")

console.log(user1.greet())




