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

console.log('Male: ', Male.prototype);

danniel.cityOfBirth = 'Sao Paulo';
danniel.sayCityOfBirth();
danniel.sayGender();

console.log('Danniel: ', danniel);


denise.cityOfBirth = 'San Antonio';
denise.sayCityOfBirth();
denise.sayGender();


