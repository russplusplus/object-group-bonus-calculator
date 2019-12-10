const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
function bonusCalculator(emloyee) {
  let newEmployee = {
    name: 'name',
    bonusPercentage: 'bonusPercentage',
    totalCompensation: 'totalCompensation',
    totalBonus: 'totalBonus'
  };

  newEmployee.name = employee.name;

  if (employee.reviewRating <= 2) {
    newEmployee.bonusPercentage = 0;
    newEmployee.totalBonus = 0;
    newEmployee.totalCompensation = employee.annualSalary;
  }
  if (employee.reviewRating <= 3) {
    newEmployee.bonusPercentage = 0.04;
    newEmployee.totalBonus = .04 * Number(employee.annualSalary);
    newEmployee.totalCompensation = Number(employee.annualSalary) + (newEmployee.totalBonus);
  }
  if (employee.reviewRating <= 4) {
    newEmployee.bonusPercentage = 0.06;
    newEmployee.totalBonus = .06 * Number(employee.annualSalary);
    newEmployee.totalCompensation = Number(employee.annualSalary) + (newEmployee.totalBonus);
  }
  if (employee.reviewRating <= 5) {
    newEmployee.bonusPercentage = 0.1;
    newEmployee.totalBonus = .1 * Number(employee.annualSalary);
    newEmployee.totalCompensation = Number(employee.annualSalary) + (newEmployee.totalBonus);
  }

  // Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
  // This problem is massive! Break the problem down. Use the debugger.
  // What is the fewest lines of code I can write and test to get just a little closer?

  // This is not a race. Everyone on your team should understand what is happening.
  // Ask questions when you don't.

  console.log(employees);
