'use strict';

var mergeAndSort = (function(){

    const arr = [0,8,3,6,3,'87','32','19'];
    console.log('Initial arr: ', arr);

    function checkIfString (arr) {
        const stringArr = arr.filter(function(value) {
            return (typeof value === 'string')
        })
        .map(function(string) {
            return Number(string);
        });

        return stringArr;
    }

    function checkIfInteger(arr){
        const integerArr = arr.filter(function(value) {
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

    function mergeSort(arr) {
        combineArr(arr);

        if (arr.length === 1) {
            return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        return merge(
                mergeSort(left),
                mergeSort(right)
        )
    }

    function merge (left, right) {
        let result = [];
        let indexLeft = 0;
        let indexRight = 0;

        while (indexLeft < left.length && indexRight < right.length) {
            if (left[indexLeft] < right[indexRight]) {
                result.push(left[indexLeft]);
                indexLeft++
            }

            else {
                result.push(right[indexRight])
                indexRight++
            }
        }

        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));

    }

    function init() {
        console.log('Arr: ', combineArr(mergeSort(arr)));
    }

    return {
        init: init
    }
})();

mergeAndSort.init();
