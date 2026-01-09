const customerName = "Rohit";
const policyType = "Health Insurance";
const premium = 15000;
let policyNumber = "INS-1023"; // string
let taxRate = 0.18; // number
let isActive = true; // boolean

let totalPremium = premium + premium * taxRate;

const message = `
Hello ${customerName},

Your ${policyType} vide no: ${policyNumber}  is active.
Annual Premium: ₹${premium} and Total Premium (including tax): ₹${totalPremium}.

Thank you!
`;

console.log(message);
