class Node {
    constructor(data=null,left=null,right=null){
       this.data = data;
       this.left = left;
       this.right = right;
    }
}

class BST{
    constructor(){
        this.root = null
    }
    insertNode(data){
       if(this.root == null){
        this.root = new Node(data);
       }
       else{
        this.addNode(this.root,data)
       }
    }
    addNode(node,data){
        if(node.data > data){
            if(node.left == null){
                node.left = new Node(data)
            }else{
                this.addNode(node.left,data)
            }
        }
        else{
            if(node.right == null){
                node.right = new Node(data)
            }else{
                this.addNode(node.right,data)
            }
        }
    }
    minimumNode(node){
        if(node.left == null){
            return node
        }
        let min = this.minimumNode(node.left)
        return min.data
    }
    maximumNode(node){
        if(node.right == null){
            return node
        }
        let max = this.maximumNode(node.right)
        return max
    }
}

const obj = new BST();
obj.insertNode(10);
obj.insertNode(1);
obj.insertNode(11);
obj.insertNode(2);
obj.insertNode(12);
obj.insertNode(3);
obj.insertNode(13);

// console.log(JSON.stringify(obj.root))
console.log("Minimum : ",obj.minimumNode(obj.root))
console.log("Maximum : ",obj.maximumNode(obj.root).data)