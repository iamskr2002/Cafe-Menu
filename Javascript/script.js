let fullNam = prompt("Full Name: ");

fullNam  = fullNam.toLowerCase();
let a = fullNam.length;
fullNam = fullNam.replace(" ", "");

console.log("Username is: @"+fullNam+a);