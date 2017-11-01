angular.module('app').factory('doubleMaker', function(){
    return {
        double: function (number){
            console.log(number)
            return number * 2
        },
        greeting: "Hello"
    };
})