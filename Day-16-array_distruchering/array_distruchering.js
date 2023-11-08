// array destructuring and rest operators

/*  array destructuring :-
    Array madhil element la new variables madhe store karne.
    Appan jitke variables geu titke array item collect karu shakto new variables madhe.
    Jar aapan array pecksha jast variables getle ani te jar console kele tar extra variables "undefined" hotat.
*/

/* ========================= creating variables and taking value from array ========================= */ 
// examlpe 1 
    // const colors = ['red', 'blue', 'green', 'yellow','white','orange'];

    // let [color_1, color_2, color_3] = colors;

    // console.log(color_1);
    // console.log(color_2);
    // console.log(color_3);
/* ========================= creating variables and taking value from array ========================= */ 




/* ========================= array peksha extra variables create kele tar ========================= */
// example 2 (Extra variables)
    // const colors = ['red', 'blue', 'green'];
    // let [color_1, color_2, color_3, color_4, color_5, color_6] =colors;
    // console.log(color_1);
    // console.log(color_2);
    // console.log(color_3);
    // console.log(color_4);    // ans :- undifinded
    // console.log(color_5);    // ans :- undifinded
    // console.log(color_6);    // ans :- undifinded
/* ========================= array peksha extra variables create kele tar ========================= */




/* ========================= How to skip array item for creating new variables ========================= */

// example 3 (in this exmple we want blue, yellow, orange color only in new variables)
    
    // const colors = ['red', 'blue', 'green', 'yellow','white','orange'];
    // let [,color_1, ,color_2, ,color_3] =colors;

    // console.log(color_1);
    // console.log(color_2);
    // console.log(color_3);

/* ========================= How to skip array item for creating new variables ========================= */



/* 
    Rest operators :- 
        Rest operator create with '...variableName'
        rest operators mhanje appan limited variables create kele ani Array madhil remaing items new array create karun store karne.
*/


/* ========================= creating limited variables and create new array for remaing array items ========================= */
// example 4 (in below example we create 3 variables for taking 3 value from colors array and remaing value store in new array called as remainColor.)

    // const colors = ['red', 'blue', 'green', 'yellow','white','orange'];
    // let [color_1, color_2, color_3,...remainColor]= colors;

    // console.log(color_1);        // red
    // console.log(color_2);        // blue
    // console.log(color_3);        // green 
    // console.log(remainColor);    // ['yellow','white','orange']

/* ========================= creating limited variables and create new array for remaing array items ========================= */


/* ========================= swapping value ========================= */
    /*
        swapping variables value :- 
            The values of the two variables can be swapped in one destructuring expression. The array destructuring makes it easy to swap the values of variables without using any temporary variable.
    */ 

// example 5 :- 
    // let x = 100;
    // let y = 300;

    // [x,y] = [y,x]

    // console.log('value of x is :- '+ x);
    // console.log('value of y is :- '+ y);
/* ========================= swapping value ========================= */


/* ========================= Parsing returned array from functions ========================= */
// example 6 :- 
    // function madhun return aalele value la new variables madhi store karne

    // function array(){
    //     return ['love', 'trush', 'bob']
    // }

    // let [name_1,name_2,name_3] = array()

    // console.log(name_1);    // love
    // console.log(name_2);    // trush
    // console.log(name_3);    // bob

/* ========================= Parsing returned array from functions ========================= */

