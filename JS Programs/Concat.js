const arr=[[1],[2],[3]];
console.log(arr.length)

const concatenate=(arr)=>{
   var merge=[];
for(var i=0;i<arr.length;i++)
{
merge=merge.concat(arr[i]);
}
console.log(merge);
}

concatenate(arr);
