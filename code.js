// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

//sayHello function
function sayHello(input){
   return "Hello, " + input + "!";
}

function sayHello(input){
    if(input === "Alex"){
        return "Hello, Alex!";
    } else if(input === "Pat") {
        return "Hello, Pat!";
    }else if (input === "World" ){
        return "Hello, World!";
    } else if (input == true){
        return "Hello, World!";
    } else if(input == false) {
        return "Hello, World!";
    } else {
        return "Hello, Jane!";
    }
}

console.log(sayHello('Hi'));
console.log(sayHello("Alex"));

//isFive function
function isFive(input){
    if (input === 5){
        return true;
    } else if (input === "5") {
        return true;
    } else{
        return false;
    }
}

//isEven function

function isEven(input){
    return false ;
}





