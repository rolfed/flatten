var build = (function(){

    function extend(client, parent){
        client.prototype = parent.prototype;
    };

    function Automobile(){};

    Automobile.prototype = {
        type: '',
        make: '',
        model: '',
        year: null,
        color: '',
        doors: null,
        alarm: false,
        open: false,
        openDoor: function(){
            this.open = true;
            console.log('The doors are open');
        },
        alarm: function(){
            this.alarm = true;
            console.log('The alarm is off');
        }
    };

    function suv(){
        this.type = 'SUV';
    };

    function truck(){
        this.type = 'Truck';
    };

    extend(suv, Automobile);
    extend(truck, Automobile);

    var fourRunner = new suv();

    fourRunner.make = 'Toyota';
    fourRunner.model = '4Runner';
    fourRunner.year = 2017;
    fourRunner.color = 'Black';
    fourRunner.doors = 4;

    var tacoma = new truck();
    tacoma.make = 'Totota';
    tacoma.model = 'Tacoma';
    tacoma.year = 2016;
    tacoma.color = 'Silver';
    tacoma.doors = 2;

    return {
        init: function(){
            console.log('Init is on fire');
            console.log('4Runner: ', fourRunner);
            console.log('\n\nTacoma: ', tacoma);

            fourRunner.openDoor();
            tacoma.openDoor();
            console.log(fourRunner.model, ' doors are open? ', fourRunner.open);
            console.log('\n\n', tacoma.model, ' doors are open? ', tacoma.open);

            fourRunner.alarm();
            tacoma.alarm();
            console.log(fourRunner.model, ' alarm is armed? ', fourRunner.alarm);
            console.log(tacoma.model, ' alarm is armed? ', tacoma.open);

        }
    }
})();

build.init();
