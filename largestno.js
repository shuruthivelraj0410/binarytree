let a = [1,108,72,46,2,0];

let nums = a.map((val) => val.toString());

nums = nums.sort((a,b)=> (b+a)-(a+b));

console.log(nums.join(""))