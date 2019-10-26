//1.Turn string to number
let price1 ="30.14xxx";
let price2 ="45";
price1 = parseFloat(price1);
price2 = Number(price2);
//price2 = +price2; //same as above, turn to a number.

console.log(price1);
console.log(price2);


// price1 = price1.slice(0,5);
// console.log(price1);
// price2 = price2.substr(0);
// console.log(price2);

// console.log();
// console.log(price1);
// console.log(parseInt(price2));

//2. given the number as string, remove coma and add dot.

let num = "2,45";

num = num.replace(',', '.');
console.log(num);

// num = num.split(",").join(".");//same as above.

//3. turn number to string
let price3 = 55;
price3 = price3.toString();
// price3 = `{price3}`;  //does same as above,turns to a string;
console.log(typeof price3);
// let price4 = price3 +5;
// console.log(price4);  //to double check.Prints: 555

//4. write if..else or switch that will console.log() message if someone is eligible to drink, and send them warning if they are not eligible to drink.

let age =19;
if(age>=21) console.log('Enjoy your drink');
else console.log('Sorry, You are not eligible to drink!');

//5. Find JS method to get rid of white space around the string.
let wierdString = "    this string has some white space around.  ";
console.log(`This is before triming: ${wierdString}`);

wierdString = wierdString.trim();
console.log(`This is after triming: ${wierdString}`);

//6 Create 2 variables with your first name and last name, make the first letter capitalized and concatinate them

let firstName = 'Ashraf';
let lastName = 'Kurbonaliev';


firstName = firstName[0].toUpperCase()+firstName.slice(1);
lastName = lastName[0].toUpperCase() + lastName.slice(1);
console.log(firstName[0]);
console.log(`${firstName} ${lastName}`);