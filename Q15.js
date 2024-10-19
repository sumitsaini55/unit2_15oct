function circulerprintmatrix(matrix,N){
let top=0; let bottom = N-1;
let left =0; let right = N-1;
let str="";

for(i=bottom;i>=top;i--){
    str+= matrix[i][left];
}

for(i=left+1;i<=right;i++){
    str+= matrix[top][i];
}
for(i=top+1;i<=bottom;i++){
    str+= matrix[i][right];
}
for(i=right-1;i>=left+1;i--){
    str+= matrix[bottom][i];
}
console.log(str);
}

let arr=[[1,2,3],[4,5,6],[7,8,9]];
circulerprintmatrix(arr,3);