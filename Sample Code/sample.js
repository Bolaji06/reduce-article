
// ADDITION  OF ARRAY ELEMENT
const arr = [];
const reduceArr = arr.reduce((acc, cur) =>{
   return acc + cur
}, 22);
//console.log(reduceArr);

const list = [1, 2, 3, 'a', 'b', 'c', 'd', 82, 0];
const filterList = list.reduce((acc, cur) =>{
    if (typeof cur !== 'number'){
        acc.push(cur);
      
    }
    return acc;
}, []);
//console.log(filterList);

const arrMin = [1,2,3,4,5];
const findMin = arrMin.reduce((acc, cur)=>{
    return Math.min(acc, cur);
}, 0);
//console.log(findMin);

const shoppingCart = [
    {
        product: 'monitor',
        quantity: 2,
        amount: 400,
    },
    {
        product: 'keyboard',
        quantity: 4,
        amount: 250,
    },
    {
        product: 'mouse',
        quantity: 3,
        amount: 150,
    }
];

const totalAmount = shoppingCart.reduce((acc, cur)=>{
    return acc + cur.quantity * cur.amount;
    
}, 0)
console.log(totalAmount);

const loop = shoppingCart.forEach(item => console.log(item.amount * item.quantity));