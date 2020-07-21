//Creating my converter

const changeDeg = () =>{
    const cv = document.getElementById('cd').value;

    let fd = cv *1.8+32;

    let result = document.getElementById('fd').value;

    console.log(fd);

    document.getElementById('fd').value = fd;
}

const changeDeg2 = () =>{
    const fv = document.getElementById('fd2').value;

    let cd2 = (fv -32)*5/9;

    let result = document.getElementById('cd2').value;

    console.log(cd2);

    document.getElementById('cd2').value = cd2;
}

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

// 6. 

let myTiv = 79;

if(myTiv % 2 !==0){

   console.log('Odd')
           
} else{
    console.log('Even')
};


