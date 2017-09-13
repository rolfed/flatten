/*
 * Revealing Module Pattern
 */
var Exposer = (function(){
    return {

        arrayChecker: function(arr){
            if(!Array.isArray(arr)){
                return [arr];
            }
        },

        reduce: function(arr){
            var anyArrayFlattened = arr.reduce(function(a, b) {
                return a.concat(b)
            }, []);
            return anyArrayFlattened;
        },


        flatten: function(arr){
            var array = [];

            for(var i = 0; i < arr.length; i++){
                array = array.concat(this.flatten(arr[i]));
            }

            return array;
        },

        sortArr: function(r, a) {
        },

        fun: function(arr){
            var array = arr;
            return array.reduce(function iterate(r, a){
                if (a === null){
                    return r;
                }

                if (Array.isArray(a)) {
                    return a.reduce(iterate, r);
                }

                if (typeof a === 'object'){
                    return Object.keys(a).map(k => a[k]).reduce(iterate, r);
                }

                return r.concat(a);
            }, []);
        }


    }
})();

var arr = [1, [2, [3]], [4,[5,[6]]]];
console.log('Reduce: ', Exposer.reduce(arr));
console.log('Flatten: ', Exposer.flatten(arr));
console.log('Fun: ', Exposer.fun(arr));

