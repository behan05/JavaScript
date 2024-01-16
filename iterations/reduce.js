
const num = [1, 2, 3];

const previousVal = 0
const myTotal = num.reduce((previousVal, currVal) => {
    // console.log(`previousVal: ${previousVal} and the current value is: ${currVal}`);
    return previousVal + currVal;
})
// console.log(myTotal);




const shoppingCart = [
    {
        itemName : "python Cource",
        price : 999
    },
    {
        itemName : "java Cource",
        price : 1999
    },
    {
        itemName : "javaScript Cource",
        price : 2999
    },
    {
        itemName : "php Cource",
        price : 999
    },
    {
        itemName : "data science Cource",
        price : 12999
    },
    {
        itemName : "Ruby Cource",
        price : 1999
    },
]

const priceToPay = shoppingCart.reduce((preVal, currVal) => (preVal + currVal.price),0);

console.log(priceToPay);

let all = 0;
shoppingCart.forEach((item) => {
    all += item.price;
    
})
console.log(all);



