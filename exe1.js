"use strict";
const num = 123;
let sum = 0;
const ones=num%10;
const tens=(num%100-ones)/10;
const hundreds=(num-ones-(tens*10))/100;
sum= ones+tens+hundreds;
console.log(sum);
