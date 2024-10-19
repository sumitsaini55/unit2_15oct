function arrays2d(arr,m,n){
for (i=0;i<n;i++){
    console.log(arr[i].join(" "));
}    
return arr;
}
let arr= [[1,2],[3,4],[5,6]]
console.log(arrays2d(arr,2,3));