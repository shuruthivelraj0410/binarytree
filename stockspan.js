// let a = [100,80,60,70,60,75,85]
// let a = [7,2,1,2]
let a = [7,34,1,2]
let count = 0
let n = a.length;
let res = [1];
for(let i = 1;i<n;i++){
    if(a[i]-a[i-1]>0){
        for(let j=i-2;j>=0;j--){
            if(a[j]<=a[i]){
                count++;
            }else{
                break;
            }
        }
        res.push(count + 2)
        count = 0
    }else{
        res.push(1)
    }
}

console.log(res)