class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const n1 = new Node(100);
console.log(n1);

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    //Insert at index
    insertAt(data, index) {
        //out of range
        if(index > 0 && index > this.size) {
            return;
        }

        //If first index
        if(index === 0) {
            // this.insertFirst(data);
            this.head = new Node(data, this.head);
            return;
        } 
        const node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;
        while(count < index) {
            previous = current; // node before index
            count++;
            current = current.next; // node after index
        }
        node.next = current;
        previous.next = node;

        this.size++
    }

    //Get at index
    getAt (index) {
        
        if(index > 0 && index > this.size) {
            return;
        }

        let count = 0;
        let current = this.head;
        // while (count < index) {
        //     current = current.next;
        //     count ++;
        // }
        // return current.data;

        while (current) {
            if (count === index) {
                console.log(current.data)
            }
            count++;
            current = current.next;
        }
    }

    //Remove at index
    removeAt (index) {
        let current = this.head;
        let previous;
        let count = 0;

        if (index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count ++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    //Clear list
    clearList() {
        this.size = 0;
        this.head = null;
    }

    //Print list data
    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(700, 1);
ll.getAt(4);

// ll.removeAt(4);
ll.printListData();