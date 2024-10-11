// let a = [100,80,60,70,60,75,85]
// let a = [7,2,1,2]
// let a = [7,34,1,2]
let a = [ 10, 4, 5, 90, 120, 80 ];
const n = a.length
const stack = [0];
const res = new Array(n).fill(1)

for(let i=1;i<n;i++){
    while(stack.length >0 && a[i]>= a[stack[stack.length-1]]){
      stack.pop()
    } 
    res[i] = (stack.length==0) ? i+1 : i - stack[stack.length-1] 
    stack.push(i)
}

console.log(res)