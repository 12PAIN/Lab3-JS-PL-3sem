const user = {
    name: "John"
};

console.log(user);

// это будет работать?
user.name = "Pete";
// Да, это будет работать, тк свойство у нас не константное

console.log(user);
// а это? - Нет, тк сам объект константен, то есть именно сам объект поменять нельзя, а св-ва можно
user = 123;

console.log(user);