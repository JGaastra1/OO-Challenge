class Vehicle{
    constructor(make, model, year){
        this.model = model;
        this.make = make;
        this.year = year;
    }
    honk(){
        return 'Beeeeep! and a new check engine light';
    }
    toString(){
        const { make, model, year } = this;
        return `The vehical is a ${make} ${model} from ${year}`;

    }
}

let myFirstVehicle = new Vehicle('honda', 'accord', 2000);


class Car extends Vehicle{
    constructor(make, model, year){
    super(make, model, year)
    }
    numWheels(){
        return 4;
    }
}

let myFirstCar = new Car('Toyota', '4runner', '2002');


class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year)
    }
    numWheels(){
        return 2;
    }
    revEngine(){
        return 'VROOM!!!!!'
    }
}

let myFirstMotorcycle = new Motorcycle('classified', 'botmobile', 2050);



// if (vehicles.length > capacity){
//     return "Sorry, we're full.";
//  }


class Garage{
    constructor(capacity){
        this.vehicles = [];    
        this.capacity = capacity;    
    }
    
    
    add(newVehicle){
        this.vehicles.push(newVehicle);
        if(this.vehicles.length > this.capacity){
            return "Sorry, we're full.";
        }
        return 'vehicle added!';

    }

    
}

let garage = new Garage(2);