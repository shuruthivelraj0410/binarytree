class Node {
    constructor(data = null,children=[]){
        this.data = data;
        this.children = children
    }
}

class Tree{
    constructor(){
        this.root = null
    }
    levelOrder(root){
     let queue = [];
     queue.push(root);
     let visited = [];
     while(queue.length>0){
        let curr = queue.shift();
        visited.push(curr.data);
        let children = curr.children;
        children.forEach(child => {
            queue.push(child)
        });
     }
     return visited
    }
}

const obj = new Tree();
obj.root = new Node(5)
obj.root.children.push(new Node(1))
obj.root.children.push(new Node(2))
obj.root.children.push(new Node(3))
obj.root.children.push(new Node(4))
obj.root.children.push(new Node(0))
obj.root.children[0].children.push(new Node(-7))
obj.root.children[1].children.push(new Node(-2))
obj.root.children[2].children.push(new Node(-5))
obj.root.children[3].children.push(new Node(-1))
obj.root.children[0].children.push(new Node(-4))
console.log(obj.levelOrder(obj.root))