$(document).ready(onReady);

function onReady(){
  console.log(
    'in onReady function'
  );
  $('#parentDivOne').on('click', bonusCalculator )
}

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
function bonusCalculator(employee) {
  let newEmployee = {
    name: 'name',
    bonusPercentage: 'bonusPercentage',
    totalCompensation: 'totalCompensation',
    totalBonus: 'totalBonus'
  };

  newEmployee.name = employee.name;

  if (employee.reviewRating === 2) {
    newEmployee.bonusPercentage = 0;
//    newEmployee.totalBonus = 0;
//    newEmployee.totalCompensation = employee.annualSalary;
  }
  if (employee.reviewRating === 3) {
    newEmployee.bonusPercentage = 0.04;
//    newEmployee.totalBonus = .04 * Number(employee.annualSalary);
//    newEmployee.totalCompensation = Number(employee.annualSalary) + (newEmployee.totalBonus);
  }
  if (employee.reviewRating === 4) {
    newEmployee.bonusPercentage = 0.06;
//    newEmployee.totalBonus = .06 * Number(employee.annualSalary);
//    newEmployee.totalCompensation = Number(employee.annualSalary) + (newEmployee.totalBonus);
  }
  if (employee.reviewRating === 5) {
    newEmployee.bonusPercentage = 0.10;
//    newEmployee.totalBonus = .1 * Number(employee.annualSalary);
//    newEmployee.totalCompensation = Number(employee.annualSalary) + (newEmployee.totalBonus);
  }
  if (Number(employee.employeeNumber) <= 9999) {
    newEmployee.bonusPercentage += 0.05;
  }

  console.log(newEmployee.bonusPercentage);
  console.log(employee.annualSalary);
  console.log(newEmployee.totalBonus);

  newEmployee.totalBonus = newEmployee.bonusPercentage * employee.annualSalary;  
  newEmployee.totalCompensation = Number(employee.annualSalary) + newEmployee.totalBonus;

  if (newEmployee.totalCompensation > 65000){
    newEmployee.bonusPercentage -= 0.01;
    newEmployee.totalBonus = newEmployee.bonusPercentage * employee.annualSalary;  
    newEmployee.totalCompensation = Number(employee.annualSalary) + newEmployee.totalBonus;
  }

  if (newEmployee.totalBonus > 0.13){
    newEmployee.totalBonus = 0.13;
    newEmployee.totalBonus = newEmployee.bonusPercentage * employee.annualSalary;  
    newEmployee.totalCompensation = Number(employee.annualSalary) + newEmployee.totalBonus;
  }

  if (newEmployee.totalBonus < 0){
    newEmployee.totalBonus = 0;
    newEmployee.totalBonus = newEmployee.bonusPercentage * employee.annualSalary;  
    newEmployee.totalCompensation = Number(employee.annualSalary) + newEmployee.totalBonus;
  }

  console.log(newEmployee.bonusPercentage);

  return newEmployee;
}

console.log(bonusCalculator(employees[0]));
  // Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
  // This problem is massive! Break the problem down. Use the debugger.
  // What is the fewest lines of code I can write and test to get just a little closer?

  // This is not a race. Everyone on your team should understand what is happening.
  // Ask questions when you don't.

  console.log(employees);
