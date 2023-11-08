// const employee = {
//     name:'love',
//     phone:8007800032,
//     email:'zmabrelove@gmail.com'
// }

// console.log(employee.email);


/* ====================================== How to access data from object ====================================== */
    /* =================== Dot notaion, Bracket notaion =================== */ 
    // example - 1 Dot notaion :-
        // const employee = {
        //     name:'jon doe',
        //     phone:8007800032,
        //     email:'jondoe@gmail.com',
        //     position:'manger'
        // } 
        // in above object if we want access the any key we used keyName.notaion
        
        // console.log(employee.phone); // here we are accessing user phone no. using = "objectName.keyName"


    // example - 2 Bracket notaion :-
        // const employee = {
        //     name:'jon doe',
        //     phone:8007800032,
        //     email:'jondoe@gmail.com',
        //     position:'manger',
        //     company:'goggle'
        // }

        // console.log(employee['company']);   //here we can access data from object :- objectName['keyName'];

    /* =================== Dot notaion, Bracket notaion =================== */ 
/* ====================================== How to access data from object ====================================== */


/* =================== How to add key value pair in object using .dot notation & []Bracket notation =================== */
    /* ========== . Dot notaion ========== */
        /* adding key value pair with */
        // const employee = {
        //     name:'jon',
        //     phone:8007800032,
        //     email:'jondoe@gmail.com',
        // }   
        // console.log(employee);

        // employee.position = 'manger'     //using this line we are adding key-'position', value-'frontend developer'; 
        // employee.gender = 'male'         //using this line we are adding key-'gender', value-'frontend developer'; 
        // employee.DOB = '11 April 1995'   //using this line we are adding key-'DOB', value-'frontend developer'; 

        // console.log(employee);
    /* ========== . Dot notaion ========== */
    
    /* ========== bracket notaion ========== */
        // employee['city']='LA'
        // console.log(employee);
    /* ========== bracket notaion ========== */
/* =================== How to add key value pair in object using .dot notation & []Bracket notation =================== */





/* ========================== *** Differnce between . Dot notation & [] Bracet notation *** ========================== */ 
    // const employee = {
    //     'name': 'jon Doe',
    //     'age':27,
    //     'education':'M.B.A'
    // }

    /* differnce between dot notaion and bracket notation 
        1} key name madhi space aasleli key access karu shakt nahi .Dot notaion madhi.
        2} space aasleli key aapan access karu shakto [] Bracket notaion madhi.

        3}jar aaplaya ekhaday variableche value as key-name mhanun ghaychi aasel ani tyala dusray varialbechi value as a value mhanun set
            karaychi aasel tar te []Bracket notation ne possible aahi
    */
/* ========================== *** Differnce between . Dot notation & [] Bracet notation *** ========================== */  





/* ================================ itrate object ================================ */ 

/* ================================ Computed proerties ================================ */ 
    // let key1 = 'userName';
    // let key2 = 'userEmail';

    // let value1 = 'jon Doe';
    // let value2 = 'jondoe@gmail.com'


    // const obj = {
    //     [key1] : value1,
    //     [key2] : value2
    // }

    // console.log(obj);

    /* option 1) :- varil exmaple maadhe aapan Object madhil keyName he 1ka variable che value getoy ani,
        tay keyla value dusraya varibleche value getoy.
        
        jay variable che value as key mhanun pick karaychi aahi tay variable la object madhe " [ varible Name ] "
        squer bracket madhi gayche.
    */

    // option 2) :- 
    // const obj = {}
    // obj[key1] = value1,
    // obj[key2] = value2

    // console.log(obj);