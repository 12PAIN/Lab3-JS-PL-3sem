let hamster = {
    stomach: [],
    
    eat: function(food) {
        Object.defineProperty(this, "stomach", []);
        this.stomach.push(food);
    }

};
    
let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};
    
// Этот хомяк нашёл еду

speedy.eat("apple");

console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте

console.log(lazy.stomach); // apple
    