var customerName = 'bob';

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
    return bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    return bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 2;

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 4;
}