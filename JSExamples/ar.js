const calculatePremium = (baseAmount, taxRate) => {
  return baseAmount + baseAmount * taxRate;
};
console.log(
  "Calculating total premium using Arraow function, for base amount ₹10,000 with tax rate 18%:"
);
console.log(calculatePremium(10000, 0.18));

function calculatePremium2(amount, taxRate) {
  return amount + amount * taxRate;
}
console.log(
  "Calculating total premium using Regular function, for base amount ₹20,000 with tax rate 18%:"
);
console.log(calculatePremium2(20000, 0.18));

const calculatePremiumAR = (amount, taxRate) => amount + amount * taxRate;
console.log(
  "Calculating total premium using Concise Arrow function, for base amount ₹30,000 with tax rate 18%:"
);
console.log(calculatePremiumAR(30000, 0.18));

console.log("Few More Examples:");
function isEligible(age, hasMedicalHistory) {
  return age >= 18 && !hasMedicalHistory;
}
const isEligibleAR = (age, hasMedicalHistory) =>
  age >= 18 && !hasMedicalHistory;

const activePolicies1 = policies.filter(function (policy) {
  return policy.active;
});

const activePolicies2 = policies.filter((policy) => policy.active);

const policy1 = {
  premium: 10000,
  showPremium: function () {
    console.log(this.premium);
  },
};

policy1.showPremium();

const policy2 = {
  premium: 10000,
  showPremium: () => {
    console.log(this.premium); // undefined
  },
};

const totalPremiumReduce = policies.reduce(function (sum, policy) {
  return sum + policy.premium;
}, 0);

const totalPremiumReduce1 = policies.reduce(
  (sum, policy) => sum + policy.premium,
  0
);
