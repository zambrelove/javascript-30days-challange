/* ======================================== for in loop ======================================== */ 

/*
    1) for in loop is use with Object
    2) it use for 'print object property'
    Syntex :-

        for(let i in objectName){
            our statement//
        }
*/


// example


const details = {
    fullName : 'Love Zambre',
    phone : 8007800032,
    email : 'zambrelove@gmail.com',
    address: 'dhayri, Pune'
}

for(let info in details){
    console.log(info + ' : ' + details[info]);
}