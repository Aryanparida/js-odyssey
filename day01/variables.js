const accountId = 1234567890;
let accountName = "Aryan";
let email = "aryanparida086@gmail.com";
var accountBalance = 1000.50;
personcity = "bengaluru";

// accountId = 9876543210; this is not allowed because accountId is a constant variable and cannot be reassigned.

email= "aryan@gmail.com"
accountBalance = 2000.75;
personcity = "delhi";

console.table({ accountId, accountName, email, accountBalance, personcity });
// this can be used to display the values of the variables in a tabular format in the console.
/* prefer not to use var as it is block and function scoped and can lead to unexpected behavior. 
Use let or const instead. */