// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
}

// function sayHello(input) {
//     if (input === "Alex") {
//         return "Hello, Alex!"
//     } else if (input==="Pat") {
//         return "Hello, Pat!";
//     } else{
//         return "Hello, Jane!";
//     }
// }

function sayHello(input) {
 if (typeof input === "string") {
        return 'Hello, ' + input + '!';
    } else if (input !=="string"){
        return "Hello, World!";
 }
}



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



