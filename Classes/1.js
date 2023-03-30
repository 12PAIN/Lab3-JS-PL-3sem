

class Clock{

    constructor(hours, minutes, seconds){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    showTime() {
        console.log(this.hours + " часов, " + this.minutes + " минут, " + this.seconds + " секунд");
    }

}

let clock = new Clock(11, 25, 37);

clock.showTime();