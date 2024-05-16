//Steven's Tip Challange
//Step 1
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20

//Step 2
console.log('The bill was $${bill}, the tip was $${tip}, and the total value $$ {bill+tip}.');

//Step 3

//Function declaration to calculate the tip based on the bill amount and return a formatted message 
function calcTip(bill) {const tip = (bill >=50 && bill <= 300) ? bill * 0.15 : bill * 0.20; return ' the bill was $${bill}, the tip was $${tip}, and the total value $$ {bill + tip.';}

//Test the function with a bill value of 100
const message = calcTip(100); console.log(message);

//Step 4

//Function declaration to calculate the tip based on the bill amount and return a formatted message 
function calcTip(bill){ const tip = (bill >= 50 && bill <= 300) ? bill *0.15 : bill * 0.20; return tip; }

//datasets
const bills1 = [275, 40, 430];
const bills2 = [125, 555, 44];

//Map through each array and call calcTip on bill values
const tips1=  bills1.map(calcTip);
const tips2 = bills2.map(calcTip);

//Sum each bill with respective tip
const totals1 = bills1.map((bill,index) => bill + tips1[index]); const totals2 = bills2.map((bill,index) => bill + tips2 [index]);

//Log the results
console.log('Dataset one:');
console.log('Bills:', bills1);
console.log('Tips:', tips1);
console.log('Totals:', totals1);

console.log('Dataset two:');
console.log('Bills:', bills2); 
console.log('Tips:', tips2);
console.log('Totals:', totals2);




