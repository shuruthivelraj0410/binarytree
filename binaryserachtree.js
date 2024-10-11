class Node {
    constructor(data,left = null,right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree{
    constructor(){
     this.root = null
    }
    insertRoot(data){
        if(this.root == null){
            this.root = new Node(data)
        }
        else{
            this.insertNode(this.root,data)
        }
    }
    insertNode(root,data){
            if(root.data < data){
                if(root.right == null){
                    root.right = new Node(data)
                }
                else{
                this.insertNode(root.right,data)
                }
            }
            else{
                if(root.left == null){
                    root.left = new Node(data)
                }
                else{
                this.insertNode(root.left,data)
                }
            }
    }
    findMinNode(node){
        if(node.left == null){
            return node
        }
        let min = this.findMinNode(node.left)
        return min
    }
    findMaxNode(node){
        if(node.right == null){
            return node
        }
        let max = this.findMaxNode(node.right)
        return max
    }
    display(){
        console.log(JSON.stringify(this.root))
    }
    search(node,key){
        if(node == null){
            return null
        }
      else{
        if(node.data == key){
            node.message = "Key found" 
            return node
          }
        else if(node.data < key){
           this.search(node.right,key)
        }
        else if(node.data > key){
            this.search(node.left,key)
        }
      }
    }
    inorder(node){
        if(node != null){
          this.inorder(node.left);
          console.log(node.data)
          this.inorder(node.right)
        }
    }
    preorder(node){
        if(node!=null){
            console.log(node.data)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }
    postorder(node){
        if(node!=null){
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.data)
        }
    }
}


const obj = new Tree();

obj.insertRoot(5)
obj.insertRoot(6)
obj.insertRoot(4)
obj.insertRoot(1)
console.log("Minimum : ",obj.findMinNode(obj.root))
console.log("Maximum : ",obj.findMaxNode(obj.root))
console.log("Search : ",obj.search(obj.root,2))
obj.display()
// obj.inorder(obj.root)
obj.postorder(obj.root)