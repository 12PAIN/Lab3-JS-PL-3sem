
function Employee(name, dept, number, salary){

    let employee = {
        name: name,
        dept: dept,
        number: number,
        salary: salary,

        about: function (){
            console.log(this);
            for(item in this){
                
                if(typeof(this[item]) != "function") console.log (item + ": " + this[item]);
            }
        }
    }

    return employee;
}

let newEmployee = new Employee('John', 'Sales', '+111111111', 25000);

newEmployee.about();