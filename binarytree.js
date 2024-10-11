class Node{
    constructor(data,left = null,right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Bst{
    constructor(){
     this.root = null;
     this.queue = [];
     this.min = Infinity
    }
    insertNode(data){
        if(this.root == null){
            this.root = new Node(data)
            this.queue.push(this.root)
        }
        else{
            let current = this.queue[0];
            if(current.left == null){
                current.left = new Node(data);
                this.queue.push(current.left);
            }
            else if(current.right == null){
                current.right = new Node(data);
                this.queue.push(current.right);
                this.queue.shift()
            }
        }
    }
    inorder(node){
     if(node!=null){
        this.inorder(node.left);
        console.log(node.data);
        this.min = Math.min(node.data,this.min)
        this.inorder(node.right);
     }
    }
    search(node,key){
        if(node != null){
        if(node.data == key){
            node.messgae = "Key exist"
            return node;
        }
        let leftRes = this.search(node.left,key)
        if(leftRes){
            return leftRes
        }
        let rightRes = this.search(node.right,key)
        if(rightRes){
            return rightRes
        }
    }
}
levelOrderTraversal(){
let q = [];
let visited = [];
q.push(this.root);
visited.push(this.root.data)
while(q.length > 0){
 let current = q.shift();
 if(current.left !=null){
    q.push(current.left);
    visited.push(current.left.data);
 }
 if(current.right!=null){
    q.push(current.right);
    visited.push(current.right.data);  
 }
}
return visited
}
    }

    const obj = new Bst();
    obj.insertNode(5);
    obj.insertNode(4);
    obj.insertNode(0);
    obj.insertNode(6);
    obj.insertNode(9);
    obj.insertNode(-1);
    obj.inorder(obj.root)
    console.log("minimum : ", obj.min)
    console.log("search : ",obj.search(obj.root,-1))
    console.log("level order traversal : ",obj.levelOrderTraversal())
