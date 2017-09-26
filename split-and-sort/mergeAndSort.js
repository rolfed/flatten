var Split = (function(){
    var array = [9,1,4,2,6,5,3,7,9,5,8, 34, 33, 23, 4343, 33, 12, 2, 3, 44, 90];

    function mergeSort(arr) {
        if (arr.length < 2) {
            return arr;
        }

        var middle = parseInt(arr.length / 2),
            left = arr.slice(0, middle),
            right = arr.slice(middle, arr.length);

        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right) {
        var result = [];

        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        while (left.length) {
            result.push(left.shift());
        }

        while (right.length) {
            result.push(right.shift());
        }

        return result;

    }

    console.log(mergeSort(array));

})();
