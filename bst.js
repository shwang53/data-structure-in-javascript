//implement binary search tree in JS

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add = (data) => {
        const node = this.root;
        //when emptry tree
        if (node === null) { 
            this.root = new Node(data);
            return;
        }
        //when something on tree
        if (node !== null) {
            const searchTree = (node) => {
                if(data < node.data ){
                    if(node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else {
                        return searchTree(node.left)
                    }
                }
                if(data > node.data) {
                    if(node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else {
                        return searchTree(node.right)
                    }
                }
                if(data === node.data) {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    find = (data) => {
        let current = this.root;
        while(current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    isPresent = (data) => {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove = (data) => {
        const removeNode = (node, data) => {
            if (node === null) {
                return null;
            }
            if (data === node.data) {
                //if node has no children
                if (node.left === null && node.right === null) {
                    return null;
                }
                // node has no left child
                if (node.left === null) {
                    return node.right;
                }
                // node has no right child
                if (node.right === null) {
                    return node.left;
                }
                // node has two children
                let tempNode = node.right;
                while(tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }

    findMin = () => {
        let current = this.root;
        while(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax = () => {
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
    
    preOrder = (node) => {
        console.log(node.data);
        if (node.left) {
            this.preOrder(node.left);
        }
        if (node.right) {
            this.preOrder(node.right);
        }
    }
    
    inOrder = (node) => {
        if(node.left) {
            this.inOrder(node.left);
        }
        console.log(node.data);
        if(node.right) {
            this.inOrder(node.right);
        }
    }

    postOrder = (node) => {
        if(node.left) {
            this.postOrder(node.left);
        }
        if(node.right) {
            this.postOrder(node.right);
        }
        console.log(node.data);
    }
}

let bst = new BST();
bst.add(5);
bst.add(3);
bst.add(4);
bst.add(9);
bst.add(11);
bst.add(2);
bst.add(8)
bst.add(1);

bst.postOrder(bst.root);
bst.inOrder(bst.root);
bst.preOrder(bst.root);

console.log(bst);
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.find(1))
console.log(bst.isPresent(9))

console.log(bst.remove(1))
console.log(bst.findMin());

