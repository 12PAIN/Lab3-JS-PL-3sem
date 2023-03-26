let animal = {
    jumps: null
};
    
let rabbit = {
    __proto__: animal,
    jumps: true
};


console.log(rabbit.jumps); // true, потому что у нашего объекта, к которому мы обращаемся есть это поле
 
delete rabbit.jumps;

console.log(rabbit.jumps); // null, потому что у прототипа нашего объекта есть это поле, а значит оно есть и у кролика

delete animal.jumps;

console.log(rabbit.jumps); // а теперь undefinded, потому что мы и из прототипа это удалили