let head =0;
let tail =0;
for(x = 1;x<=10;x++){
    if(Math.random()<0.5){
        tail++;
    }else{
        head++;
    }
}
console.log("Tossed the coin 10 times");
console.log("Number of head: ${head}");
console.log("Number of tail: ${tail}");
