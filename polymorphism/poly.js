function extendObj(childObj, parentObj) {
    childObj.prototype = parentObj.prototype;
};

var Human = function() {};

Human.prototype = {
    name: '',
    gender: '',
    cityOfBirth: 'Please add',
    sayGender: function() {
        console.log(this.name + ' says my gender is ' + this.gender);
    },
    sayCityOfBirth: function() {
        console.log(this.name + ' was born in ' + this.cityOfBirth);
    }
};

// Male
function Male(name){
    this.gender = 'Male';
    this.name = name;
};

function Female(name){
    this.name = name;
    this.gender = 'Female';
};

extendObj(Male, Human);
extendObj(Female, Human);

var danniel = new Male('Danniel');
var denise = new Female('Denise');

// female.prototype.cityOfBirth = 'San Antonio';

// console.log('Male: ', Male.prototype);

// danniel.cityOfBirth = 'Sao Paulo';
// danniel.sayCityOfBirth();
// danniel.sayGender();

// console.log('Danniel: ', danniel);


// denise.cityOfBirth = 'San Antonio';
// denise.sayCityOfBirth();
// denise.sayGender();


/*
 * Car example
 */

var Automobile = function(){};

Automobile.prototype = {
    model: '',
    make: '',
    year: null,
    color: '',
    type: '',
    miles: null,
    gallons: null,
    calcMpg: function() {
        console.log('A ' + this.year + ' ' + this.make + ' ' + this.model + ' gets ' + (this.miles/this.gallons) + ' miles per gallon');
    },
};

function SUV(model, make){
    this.model = model;
    this.make = make;
    this.doors = 4;
    this.fourWheelDrive = true;
}

function Truck(model, make){
    this.model = model;
    this.make = make;
    this.doors = 2;
    this.fourWheelDrive = true;
    this.openCar = false;
    this.open = function(){
        this.openCar = true;
        if(this.openCar){
            console.log('The door is open');
        }
    }
}

function Van(model, make){
    this.model = model;
    this.make = make;
    this.doors = 6;
    this.fourWheelDrive = false;
}

extendObj(SUV, Automobile);
extendObj(Truck, Automobile);
extendObj(Van, Automobile);

var pilot = new SUV('Honda', 'Pilot');
pilot.year = 2017;
pilot.color = "green";
pilot.type = 'SUV';
pilot.miles = 20;
pilot.gallons = 60;

console.log('Pilot: ', pilot);
pilot.calcMpg();

var sprinter = new Van('Mercedes', 'Sprinter');
sprinter.year = 2014;
sprinter.color = "silver";
sprinter.type = 'Van';
sprinter.miles = 18;
sprinter.gallons = 400;

console.log('\n\nSprinter: ', sprinter);
sprinter.calcMpg();

var tacoma = new Truck('Toyota', 'Tacoma');

tacoma.year = '2017';
tacoma.color = 'Black';
tacoma.type ='Truck',
tacoma.miles = 18;
tacoma.gallons = 400;

console.log('\n\nTacoma: ', tacoma);
tacoma.calcMpg();
tacoma.open();


