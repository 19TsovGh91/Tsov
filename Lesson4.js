function greet () {
    console.log('hello my friend');
}

greet();

a=85;
b=62;
sum= a + b;

console.log(sum);

// 1. 

let tiv = 856428, 
lastDigit = tiv % 10;
console.log('The last digit of ', tiv, ' is ', lastDigit);

// 2.

let tiv2 = 125892;

if (tiv > 0){
    console.log(' Yes ')
} else {
    console.log(' No')
};

//3.

let tempDegreeC = 42;
let tempDegreeF;
console.log(tempDegreeF = tempDegreeC * 1.8 +32);

//4.

let tiv3 = 8;
let tiv4 = 16;

if (tiv3 % tiv4 ==0 || tiv4 % tiv3 ==0){
    alert(1)
} else{
    alert(0)
};

//5.

let aa= 956564;
bb = 8763454544; 
cc = 6894525456454;

if(aa> bb && aa > cc){
    console.log(aa)
} else if(bb > aa && bb > cc)
    console.log(bb)
else {
    console.log(cc)
};
