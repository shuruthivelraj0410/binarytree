class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
let a = [];
let index = 0;
class BT {
    constructor() {
        this.root = null;
        this.queue = []
    }
    insertNode(data) {
        if (this.root == null) {
            this.root = new Node(data);
            this.queue.push(this.root)
        }
        else {
         let curr = this.queue[0];
         if(curr.left == null){
            curr.left = new Node(data);
            this.queue.push(curr.left)
         }
         else if(curr.right == null){
            curr.right = new Node(data);
            this.queue.push(curr.right);
            this.queue.shift()
         }
        }
    }
    inorder(node){
        if(node != null){
            this.inorder(node.left);
            a.push(node.data)
            this.inorder(node.right)
        }
        return a
    }
    arrayTobst(b,node){
     if(node!=null){
        this.arrayTobst(b,node.left);
        node.data = b[index];
        index++;
        this.arrayTobst(b,node.right)
     }
    }
    convert(){
       let b = this.inorder(this.root)
       b = b.sort((a,b)=> a-b);
       this.arrayTobst(b,this.root)
    }
}

const obj = new BT();
obj.insertNode(10)
obj.insertNode(2)
obj.insertNode(7)
obj.insertNode(8)
obj.insertNode(4)
obj.convert()
console.log(obj.root)
