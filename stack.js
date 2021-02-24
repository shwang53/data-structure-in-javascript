//Implementation of stack based on array

class Stack {
    constructor() {
        this.leng = 0;
        this.storage = [];
    }
    
    push = (value) => {
        this.storage[this.leng] = value; 
        this.leng++;
    }

    pop = () => {

    }
    

}


let stack = new Stack();

console.log(stack);
stack.push(100);
stack.push(200);
stack.push(300);
console.log(stack.storage.pop())



