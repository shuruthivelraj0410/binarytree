class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insertNode(data) {
        if (this.root == null) {
            this.root = new Node(data)
        }
        else {
            this.addNode(this.root, data)
        }
    }
    addNode(curr, data) {
        if (curr.data > data) {
            if (curr.left == null) {
                curr.left = new Node(data);
            } else {
                this.addNode(curr.left, data)
            }
        }
        else if (curr.data < data) {
            if (curr.right == null) {
                curr.right = new Node(data)
            } else {
                this.addNode(curr.right, data)
            }
        }
    }
    getSuccessor(node) {
        let curr = node.right;
        while (curr.left != null) {
            curr = curr.left
        }
        return curr
    }
    deleteNode(node, key) {
        if (node == null) {
            return node
        }
        else {
            if (node.data > key) {
                node.left = this.deleteNode(node.left, key)
            }
            else if (node.data < key) {
                node.right = this.deleteNode(node.right, key)
            }
            else {
                if (node.left == null) {
                    return node.right
                }
                if (node.right == null) {
                    return node.left
                }
                let choosenNode = this.getSuccessor(node)
                node.data = choosenNode.data;
                node.right = this.deleteNode(node.right, choosenNode.data)

            }
        }
        return node;
    }



}

const obj = new BST();
obj.insertNode(10);
obj.insertNode(1);
obj.insertNode(11);
obj.insertNode(2);
obj.insertNode(12);
obj.insertNode(13);
obj.insertNode(3);
obj.insertNode(-1);
obj.insertNode(0);

console.log(JSON.stringify(obj.root))
obj.deleteNode(obj.root, 0)
console.log("After Deleting 0 :")
console.log(JSON.stringify(obj.root))
console.log("After Deleting 1000 :")
console.log(JSON.stringify(obj.root))

