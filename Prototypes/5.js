function Rabbit() {}

Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

//Rabbit.prototype = {}; //выведет True, тк теперь другой прототип будет только на новых объектах 
//Rabbit.prototype.eats = false; //выведет false, тк меняет значение св-ва прототипа
//delete rabbit.eats; //выведет true, тк он удаляет это свойство у объекта, а не у прототипа 
//delete Rabbit.prototype.eats; //выведет undefined, тк как раз удаляет св-во у прототипа

console.log(rabbit.eats);
