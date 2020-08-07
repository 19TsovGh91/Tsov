//Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

let randomArr = [84, 21, 8, 564, 7, 12, 459, 35, 48];

randomArr = randomArr.sort((a, b)=> a-b);

let evenArr= [];
randomArr = randomArr.filter (item => {
    if (item % 2 != 0)
    return true
    else {
        evenArr.push(item);
        return false;
    }
})

let oddArr = [];
randomArr = randomArr.filter (item => {
    if (item % 1 != 0)
    return true
    else {
        oddArr.push(item);
        return false;
    }
})

Array.prototype.push.apply(randomArr, oddArr, evenArr);

console.log(oddArr);
console.log(evenArr);

// Given 2 arrays. Return array with duplicate items.

let myArr1 = ['banana', 'kiwi', 'melon', 'watermelon', 'lemon', 'grapes']; 
let myArr2 = ['grapes', 'pears', 'melon', 'cherry', 'banana']; 

let myArr3 = myArr1.filter(function(val) {
    return myArr2.indexOf(val) != -1;
  });
  
  console.log(myArr3);

  //Given an array and element. Check if array includes that element.

  let stationary = ['pen', 'pencil', 'ruller', 'tape'];

  item = stationary.includes ('razor');
  console.log(item);


//Given an object. Return array of it’s keys.

let myObjectName = {age: '32', name: 'Anna',  hobby: 'dancing'};

console.log(Object.keys(myObjectName));

// Insert a digit and a number. Check whether the number contains that digit or not.

let myNumber2 = 879746;

function hasNumber(myNumber2, myDigit){
    return myNumber2.toString().split('').some(function(item){
        return item == myDigit;
    });
}

hasNumber(879746,5);
hasNumber(879746,8);


// Enter a number. Find the difference between its biggest and smallest digits

let myTiv = 5782;

let myArr = (''+ myTiv).split('').map(function(digit) {return +digit;});

let max = myArr.reduce(function(a, b) {
    return Math.max(a, b);
});

let min = myArr.reduce(function(a, b) {
    return Math.min(a, b);
});

console.log(max);
console.log(min);
console.log(max-min);
