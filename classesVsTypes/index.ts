// see: https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases

type Animal = {
    name: string

    sayHello(): string ;
}

let h: Animal = {
    name: "hello",
    sayHello: () => {
        // error: ReferenceError: name is not defined
        return `hello ${name}`
    }
}

// console.log(h.sayHello())

class Greeter {
    greeting: string;
  
    constructor(message: string) {
      this.greeting = message;
    }
  
    greet() {
      return `Hello, ${this.greeting}`
    }
}
  
let greeter = new Greeter("world");
console.log(greeter.greet())

let newGreeterWithPrototypeNoMethods = {...greeter}
// ↓ Property 'greet' does not exist on type ↓ 
// console.log(newGreeterWithPrototypeNoMethods.greet())

// https://stackoverflow.com/questions/28150967/typescript-cloning-object
// shallow clone
let newGreeter = Object.create(greeter)

console.log(greeter == newGreeter)
console.log(greeter === newGreeter)

console.log(newGreeter.greet())

