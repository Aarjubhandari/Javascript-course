const accountId = 1443
let accountEmail = "aarju@gmail.com"
var accountPassword = "12345"
accountCity = "Butwal"

// accountId = 2 // not allowed to change


accountEmail = "bhand@gmail.com"
accountPassword = "58"
accountCity = "Ktm"
let accountState;


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

