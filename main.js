angular.module('app')
    .controller('main', whatTheHeck)

function whatTheHeck($scope, doubleMaker) {
    $scope.test = 'this is a test';
    // $scope.theNumber = 5
    $scope.testfactory = (aNumber) => {
        $scope.theResult = doubleMaker.double(aNumber)
    }
    $scope.greet = doubleMaker.greeting
};
