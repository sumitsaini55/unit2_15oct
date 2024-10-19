

function printZigZag(matrix,N) 
{
    let top=0; 
    let left =0; let right = N-1;
    let str="";

    for(i=right;i>=left;i--){
        str+= matrix[top][i];
    }

    for(i=left;i<=right;i++){
        str+= matrix[top+1][i];
    }

    for(i=right;i>=left;i--){
        str+= matrix[top+2][i];
    }

    for(i=left;i<=right;i++){
        str+= matrix[top+3][i];
    }

   
    console.log(str);

    }


let arr=[[1,2,3,4,5],[6,7,8,9,1],[3,2,5,4,6],[7,8,9,1,2]];
printZigZag(arr,5);
