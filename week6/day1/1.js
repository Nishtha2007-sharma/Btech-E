//        HOISTING                SCOPE
//var     supported (undef)       function scope
//let     XXXXX                   block
//const   XXXXX                   block

hello()
function hello(){
    console.log(name); // un
    console.log("error"); // error bcz of hoisting
    
    if(true){
        var name= "shyam"; //shy
        let age = 21; // 21

        console.log(name); //shy
        console.log(age); //21
    }

    console.log(name); //shy
    cconsole.log(age); // error bcz of lexical scope
}

console.log(one());
console.log("start");

function one(){
    console.log(name);
    var name = "ram";

    three();
    console.log(name);
    return "shyam"
}

console.log("mid");

function three(){
    return "hello developers"
}
function two(){
    console.log("error");
    let age = 21;
    console.log(three());
    console.log(age);
}
console.log(two());
console.log("end");
one()

//un
//ram
//shyam
//start
//mid
//err
//hello
//21
//un
//error
//un
//ram

// 5.Timer

console.log("start");

setTimeout(() => {
    console.log("mid");
}, 5000);

console.log("end");

// EVENT LOOP

console.log("start");

setInterval(()=>{
    three()
},10000)

function one(){
    console.log(name);
    var name = "love";

    return name;
    console.log(three());
}

setTimeout(()=>{
    console.log(one());
},3000)

function two(){
    console.log(age);
    var age = 25;
    console.log(three());

    return age;
}

function three(){
    console.log("ab kya hi bole");
}

console.log("mid")

setTimeout(()=>{
    console.log(two());
},5000)

console.log("end");




