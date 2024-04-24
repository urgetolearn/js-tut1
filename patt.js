let c = "";
let rows = 5;
for(let n = 1;n<=rows;n++){
    for(let num =1;num<=5;num++){
        if(n==1 || n==rows){
            c+="*";
        }
        else{
            if(num==1 || num==rows){
                c+="*";
            }else{
                c+=" ";
            }
        }
    }
    c+="\n";
}
console.log(c);