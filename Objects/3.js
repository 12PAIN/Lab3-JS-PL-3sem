
function isEmpty(obj){
    
    if(Object.keys(obj).length == 0) return true;

    return false;
}

let obj = {};
let obj2 = {
    name: "Zizi"
};

console.log(isEmpty(obj));
console.log(isEmpty(obj2));