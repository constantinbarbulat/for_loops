"use strict";

//=============Loop_for===========
/*
for (let i = 0; i <= 5; i++) {
   console.log(i);
}*/
//================================

//=============Loop_for x2===========
/*
for (let i = 0; i <= 3; i++) {
    console.log(i);
    

        for (let j = -1; j >= -3; j--) {
            console.log(j);
        }
 
 }
 */
 //=======Asterix piramid===========
 let result = '';
 let lenght = 7;
 for (let i = 0; i < lenght; i++) {
    
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
 }
 console.log(result);
 
  //================================