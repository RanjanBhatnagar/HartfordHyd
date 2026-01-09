const policies = [
  {
    policyId: 101,
    customer: "Amit",
    type: "Health",
    premium: 12000,
    active: true,
  },
  {
    policyId: 102,
    customer: "Neha",
    type: "Life",
    premium: 25000,
    active: false,
  },
  {
    policyId: 103,
    customer: "Ravi",
    type: "Vehicle",
    premium: 8000,
    active: true,
  },
  {
    policyId: 104,
    customer: "Sonal",
    type: "Health",
    premium: 15000,
    active: true,
  },
];
console.log("Print all policy IDs.");
for (let i = 0; i < policies.length; i++) {
  console.log(policies[i].policyId);
}

console.log("Using for...of to print customer names and policy types.");
for (const policy of policies) {
  console.log(policy.customer, policy.type);
}
console.log("Using forEach to print customer names and premiums.");
policies.forEach((policy) => {
  console.log(`${policy.customer} - ₹${policy.premium}`);
});

console.log("Using Map");
const premiumsWithGST = policies.map((policy) => {
  return {
    policyId: policy.policyId,
    premium: policy.premium,
    totalPremium: policy.premium + policy.premium * 0.18,
  };
});

console.log(premiumsWithGST);

console.log("Using Filter");
const activePolicies = policies.filter((policy) => policy.active);
console.log(activePolicies);

console.log("Using Reduce");
const totalActivePremium = policies.reduce((total, policy) => {
  if (policy.active) {
    return total + policy.premium;
  }
  return total;
}, 0);

console.log(totalActivePremium);

console.log("Combining filter() + reduce()");

const totalActivePremium2 = policies
  .filter((policy) => policy.active)
  .reduce((total, policy) => total + policy.premium, 0);
console.log(totalActivePremium2);

const healthPremiumTotal = policies
  .filter((policy) => policy.type === "Health")
  .reduce((sum, policy) => sum + policy.premium, 0);

console.log(healthPremiumTotal);
