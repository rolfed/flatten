'use strict';

var mergeAndSort = (function(){

    var arr = [0,8,3,6,3,'87','32','19'];

    function checkIfString (arr) {
        var stringArr = arr.filter(function(value) {
            return (typeof value === 'string')
        })
        .map(function(string) {
            return Number(string);
        });

        return stringArr;
    }

    function checkIfInteger(arr){
        var integerArr = arr.filter(function(value) {
            return (typeof value === 'number');
        })
        .map(function(integer) {
            return Number(integer);
        });

        return integerArr;
    }

    function combineArr (arr) {
        return checkIfInteger(arr).concat(checkIfString(arr));
    }

    function mergeAndSort(arr) {
        console.log('Arr: ', arr);
    }

    function init() {
        mergeAndSort(combineArr(arr));
    }

    return {
        init: init
    }
})();

mergeAndSort.init();
