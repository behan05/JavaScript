const accountId = 2234;
let accountEmail = "behan@google.com";
var accountPassword = 12345;  // do not use var variable because there is a problem with scope.
accountState = "Delhi"; // is can work but this is not a good approach.
 
console.table([accountId, accountEmail, accountPassword, accountState]);

// accountId = 2; // can not assign value to the constant variable.

accountEmail = "sitesh@microshoft.com";
accountPassword = 324;
accountState = "jaipur";
console.table([accountEmail, accountPassword, accountState])

