let user = {

};

console.log(typeof(user));

user.name = "John";

user.surname = "Smith";

console.log(user);

user.name = "Pete";

console.log(user);

delete user.name;

console.log(user);