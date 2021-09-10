function prints (limit){
    for(var i=1;i<=limit;i++){
        console.log(i);
    }
}
function Multiplies_3(limit){
    for(var i=1;i<=limit;i++){
        if(i%3===0){
            console.log(i);
        }
    }
}


function Sequence(){
    i=5.5;
    while(i!=-3.5){
        i=i-1.5;
        console.log(i);
    }
    
}

function Sigma(limit,count){
    for(var i=1;i<=limit;i++){
        count+=i;
    }
    console.log(count)
}

function Factorial(limit){
    fact=1;
    for(var i=1;i<=12;i++){
        fact*=i;
    }
    console.log(fact)
}

console.log("Print odds 1-20: ");
prints(20);
console.log("Decreasing Multiples of 3: ");
Multiplies_3(100);
console.log("Print the sequence: ");
Sequence();
console.log("Sigma: ");
Sigma(100,0);
console.log("Factorial: ");
Factorial(12);


