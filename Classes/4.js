
class Stock{

    constructor(){
        this.currentBoxId = 0;
        this.boxes = [];
    }

    add(w, v){
        let box = {
            w: w,
            v: v,
            id: this.currentBoxId
        }

        this.currentBoxId++;

        this.boxes.push(box);
    }

    getByW(min_w){
        
        let id = -1;

        this.boxes.forEach((box, index) => {
            if(box.w >= min_w){
                id = this.boxes.splice(index, 1)[0].id;
                return;
            }
        });

        return id;
    }

    getByV(min_v){
        
        let id = -1;

        this.boxes.forEach((box, index) => {
            if(box.v >= min_v){
                id = this.boxes.splice(index, 1)[0].id;
                return;
            }
        });

        return id;
    }


}

let stock = new Stock();

stock.add(2,1); //id 0
stock.add(3,1); //id 1
stock.add(5, 3); //id 2
stock.add(1,10); //id 3

console.log(stock.getByW(4));
console.log(stock.getByW(2));
console.log(stock.getByV(2));
console.log(stock.getByV(7));
