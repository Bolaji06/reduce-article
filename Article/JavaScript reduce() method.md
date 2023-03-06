## JavaScript reduce() method: absolute beginner's guide
#### Introduction:
In this gentle beginner's guide to JavaScript ```reduce()``` method, we are going to explore how to get started with ```reduce()``` method. This is just a guide to put you in the right direction so as to get yourself familiar with the functionality and help you to start implementing this function in your projects. **This article is aim at absolute beginner**.
So, with no further ado let jump right into it.

#### What is JavaScript ```reduce()``` method?
```reduce()``` is a JavaScript array method which was introduced into the language as one of the features of ECMAScript5 (ES5). Just as the name implies, ```reduce()``` method reduces an array to a single value. This reduction of array elements to single value is carried out by an helper **callback function** (reducer).
This operation is carried out from left to right, while the result is been stored in an **accumulator**.


> **NOTE:**  ```reduce()``` method does not change the original state of the array, but only return a single value.

#### How to use ```reduce()``` method
**Syntax**<br>
The syntax of ```reduce()``` method is written:
```javascript
arr.reduce(callback(accumulator, currentValue), initialValue)
```
where arr is the array<br>
* ```reduce()``` *array method*
* **callback()** - *a function to execute on each array element often called reducer (required)*<br>
* **accumulator** - *accumulated return value*
* **currentValue** - *current array element been use*
* **initialValue** - *a value to be pass to the function as the initial value (optional)* <br>

Return Value: ```reduce()``` return a single value<br>
<br>
Since we have some basic understanding of this concepts, let us get our hand dirty by writing some code.

**<u>Example 1</u>: Let get the sum of element in an array**
````javascript
//without initialValue
const arr = [1, 2, 3, 4, 5];
const reduceArr = arr.reduce((acc, cur) =>{
    return acc + cur; 
}); // 1 + 2 + 3 + 4 + 5
console.log(reduceArr); // output: 15


//initialValue argument is pass into the reduce method
const arr = [1, 2, 3, 4, 5];
const reduceArr = arr.reduce((acc, cur) =>{
    return acc + cur;
}, 2); // 2 + 1 + 2 + 3 + 4 + 5
console.log(reduceArr); // output: 17
````
The reducer walks through the array, element by element adding the current array element to the previous result, If the initial value is not stated the additon starts from array (acc = arr[0]) index 0 and the current value at index 1.<br>

If the initial value is provided, the addition starts from the initial value (acc = initialValue) and the current value starts at index 0. The reducer does this until there are no element left in the array.

**<u>Example 2:</u> Find minimum number in an array**
````javascript
const arrMin = [10, 12, 30, 4, 15];
const findMin = arrMin.reduce((acc, cur)=>{
    return Math.min(acc, cur);
});
console.log(findMin); // 4
````

>Reducing an empty array with no initial value will throw a **TypeError**, so it's a good practice to provide the initial value before reducing.  
  
**<u>Example 3:</u> Filter non numeric array element** 
````javascript  
const arr = [10, 'a', 'b', 'c', 20, 30, 40, 'c'];  
const filterArr = arr.reduce((acc, cur)=>{  
    if (typeof cur === 'number'){  
        acc.push(cur);  
    }  
    return acc;  
}, []);  
console.log(filterArr);  // [10, 20, 30, 40]
````  
In this example the initial value is set to an empty array, then our current value start at index 0, the reducer (callback) iterate over the array element one by one checking if the current value type is numeric, if the current value of the array element is a number, the value get push into the empty array. 


**<u>Example 4:</u> Let's calculate to total amount of product in a shopping cart** <br>
````javascript
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
    return acc + cur.quantity * cur.amount
}, 0);

console.log(totalAmount); // 2250
````
>It is always safer to provide the initial value argument when you're manipulating array element

To make sure ```reduce()``` works, it must always return something.<br> 

**Conclusion**<br>
For more info about how to use ```reduce()``` you can visit the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

Thanks for reading! :smiley:<br>
I will like to recieve feedback on what you think about the article. [Email](mailto:joshspencer0603@gmail.com)









