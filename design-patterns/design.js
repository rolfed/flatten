/*
 * Module
 */

var build = (function() {
    // Declare private variables and/or functions

    /*
     * Extend prototype to child - Helper function
     */
    function extendPrototype(childObj, parentObj){
        childObj.prototype = parentObj.prototype;
    }

    /*
     * Build Automobile
     */
    function Automobile(){};

    Automobile.prototype = {
        type: '',
        make: '',
        model: '',
        year: null,
        color: '',
        numberOfDoors: null,
        open: false,
        openDoor: function(){
            this.open = true;
            console.log('The car\' door is open: ', this.openDoor);
        },
        alarm: function(alarm){
            this.alarm = false;
            console.log('The car\' alarm is armed: ', this.alarm);
        }
    }

    function buildAutomobile(type, make, model){
        this.type = type;
        this.make = make;
        this.model = model;
    }

    extendPrototype(buildAutomobile, Automobile);

    tacoma = new buildAutomobile('SUV', 'Toyota', '4Runner');
    tacoma.color = "Black";
    tacoma.year = 2000;
    tacoma.numberOfDoors = 4;

    // Declare public variables and/or functions
    return {
        init: function() {
            tacoma.openDoor();
            console.log('Tacoma: ', tacoma);
        },
    }
})();

build.init();


