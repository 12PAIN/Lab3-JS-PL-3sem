let animal = {
    eat() {
        console.log(this);
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();

// Св-во full получит объект rabbit, потому что контект вызова у ф-ции eat не является animal, а является rabbit))
console.log(animal);
console.log(rabbit);
    