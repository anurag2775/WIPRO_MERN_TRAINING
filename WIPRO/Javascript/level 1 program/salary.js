let empName = prompt("Enter Employee Name:");
let basicSalary = Number(prompt("Enter Basic Monthly Salary:"));
let workingDays = Number(prompt("Enter Number of Working Days:"));
let bonus = Number(prompt("Enter Bonus Amount:"));

let totalDays = 30;
let grossSalary, tax, netSalary;

function calculateGrossSalary() {
        let perDaySalary = basicSalary / totalDays;
        let earnedSalary = perDaySalary * workingDays;
        grossSalary = earnedSalary + bonus;
    }

function calculateTax() {
        if (grossSalary <= 25000) {
            tax = grossSalary * 0.05;
        } else {
            tax = grossSalary * 0.10;
        }
    }

function calculateNetSalary() {
        netSalary = grossSalary - tax;
    }

calculateGrossSalary();
calculateTax();
calculateNetSalary();


    document.writeln("Employee Name : " + empName + "<br>");
    document.writeln("Gross Salary  : ₹" + grossSalary + "<br>");
    document.writeln("Tax Deduction : ₹" + tax + "<br>");
    document.writeln("Net Salary    : ₹" + netSalary);