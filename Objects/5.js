
function multiplyNumeric(obj){

    for(item in obj){

        if(typeof(obj[item]) === "number") obj[item] = obj[item] * 2;

    }

}

let obj = {
    numeric: 34,
    str: "123"
};

multiplyNumeric(obj);

console.log(obj);