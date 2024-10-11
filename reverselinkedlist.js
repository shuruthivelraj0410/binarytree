class Node{
    constructor(data=null,next=null){
      this.data = data;
      this.next = next
    }
}

class ll{
    constructor(){
        this.head = null;
    }
    insertNode(data){
      if(this.head == null){
        this.head = new Node(data)
      }
      else{
        let curr = this.head;
        while(curr.next!=null){
            curr = curr.next;
        }
        curr.next = new Node(data)
      }
    }
    reverse(){
    let curr = this.head;
    let prev = null;
    let next;
    while(curr!=null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    this.head = prev;
    }
}

const obj = new ll();
obj.insertNode(1);
obj.insertNode(2);
obj.insertNode(3);
obj.insertNode(4);
obj.insertNode(5);
console.log(JSON.stringify(obj.head))
console.log("------------->",JSON.stringify(obj.reverse()))
console.log(JSON.stringify(obj.head))