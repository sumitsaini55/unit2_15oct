function printW(N){
    let str="";
for(j=1;j<=N;j++)
{
    for(i=0;i<4;i++){
        if(i==0)
            {
             str+="\\";
            }
        if(i==1)
            {
                str+="/";
            }
            if(i==2)
                {
                    str+="\\";
                }
                if(i==3)
                    {
                        str+="/";
                    }
                   
    }
    
}
console.log(str);
}

console.log(printW(1));