const accountId = 144553;
let  accountEmail = "Kiran@google.com";
var accountPassword = "12345"
accountCity = "Jaipur";
let accountState;




accountEmail = "hc@hc.com"
accountPassword = "111"

accountCity = "Pune";

//accountId = 2  // not allowed
console.log(accountId);
/*
prefer not to use var
because of issue in block scope 
*/
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])