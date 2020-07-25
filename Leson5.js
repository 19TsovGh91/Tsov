//2.

let tvers = [1, 2, 3, 4];

for (let f= tvers.length - 1; f >= 0; f--) {
    console.log(tvers[f]);
}

//1. 
let num_1 = [89565, 544, 87, 332];
let secondLargest = num_1.sort(function(a,b) {return a-b})[num_1.length-2];
console.log(secondLargest);

//3.

let im_var = 'sjhdgsgfhvsvhdfsldsbdjvzsdvbz;djkfjdvzkjfvdfjjdfvjkdbf';

let im_var2 = function(str) {
    return [...str]
};

console.log(im_var2(im_var));