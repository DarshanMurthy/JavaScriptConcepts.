// Test rest parameters
function noValue(a,b,...Args){
    if(Args.length){
        console.log(a+b)
    }
}

noValue(1,3)