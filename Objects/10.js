

function Calculator(){

    let calculator ={
        a: 0,
        b: 0,

        read: function(a,b){
            this.a = a;
            this.b = b;
        },

        sum: function(){
            return this.a + this.b;
        },

        mul: function(){
            return this.a * this.b;
        }


    }

    return calculator;
}

let calculator = new Calculator();

calculator.read(2,3);

console.log(calculator.sum());
console.log(calculator.mul());