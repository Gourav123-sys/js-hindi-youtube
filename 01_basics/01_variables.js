const accountId = 134436;
let accountEmail = "Gourav@gmail.com"
var accountPassword = "123456"
accountCity = "Jamtara"
let accountState;

// accountId = 2;

accountEmail = "abc@gmail.com"
accountPassword = "13242"
accountCity = "Dhanbad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])