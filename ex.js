let name = "Ruth";
let age = 20;
let isStudent = true;
let hobbies = ["Coding", "Reading"];
let address;

console.log(typeof name);     
console.log(typeof age);      
console.log(typeof isStudent);
console.log(typeof hobbies);  
console.log(typeof address);  

let text = "frontend-developer-kigali";

let result = text
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

console.log(result);


let number = 25;

console.log("Number:", number);
console.log("Is even:", number % 2 === 0);
console.log("Square root:", Math.sqrt(number).toFixed(2));

console.log("10" + 2 * 3);
console.log(("10" + 2) * 3);
console.log(0 || "default");
console.log(0 ?? "default");
console.log(typeof NaN);
console.log("Kigali".slice(3));



const price = 500;
let qty = 3;

let total = price * qty;

console.log(`Total: ${total} RWF`);

let discount = 0.1;
discount = 0.2;

console.log(`Discount: ${discount * 100}%`);