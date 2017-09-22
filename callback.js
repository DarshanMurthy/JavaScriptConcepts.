function someAction(x, y, someCallback){
    return someCallback(x, y)
}

function calcProduct(x,y){
    return x*y
}

function calcSum(x,y){
    return x+y;
}

var node1 = someAction(5,3, calcProduct);
var node2 = someAction(9,10, calcSum)

console.log(node1)


