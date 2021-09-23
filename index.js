// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    const fareMultiplier = multiplier => 5 * multiplier;
    return fareMultiplier;
}

function fareDoubler (fare) {
    let doubledFare = fare * 2;
    return doubledFare;
}

function fareTripler (fare) {
    let tripledFare = fare * 3;
    return tripledFare;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}