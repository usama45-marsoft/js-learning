const accountId = 1234
let accountEmail = "usama@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountStates;

// accountId = 2


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);


accountEmail = "admin@gmail.com"
accountPassword = "2121212"
accountCity = "karachi"


// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountStates])
