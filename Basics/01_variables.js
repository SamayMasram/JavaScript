const accountId = 144553 
let accountEmail = "samay@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; //undefined

//accountId = 2     not allowed
accountEmail = "s@gmail.com"
accountPassword = "98765"
accountCity = "Mumbai"

/*
    Prefer not to use var 
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

