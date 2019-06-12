/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In the global scope, the value of “this” will be the window
* 2. In the Implict Binding whenever a function is called by preceding dot, the object before the dot is this,
* 3. In new binding, whenever a constructor funciton is used, it refers to the specific instance of the object that is created and returned by the constructor function
* 4. in explicit binding whenever JavaScript's call or apply method is the used, this is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myName(name) {
    console.log(this);
    return name;
}
//myName("carlos");


// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'hello',
    sayHello: function(name){
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayHello('Carlos');

// Principle 3

// code example for New Binding
function CordialPerson(greeter){
    this.greeting = 'hello';
    this.greeter= greeter;
    this.speak = function(){
    console.log(this.greeting + this.greeter);
    console.log(this);
};
}

// Principle 4

// code example for Explicit Binding