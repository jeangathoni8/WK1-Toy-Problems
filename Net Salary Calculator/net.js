// script.js
document.getElementById('salaryForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);
    const grossSalary = basicSalary + benefits;

    // PAYE calculation
    let paye = calculatePAYE(grossSalary);

    // NHIF Deduction
    let nhif = calculateNHIF(grossSalary);

    // NSSF Deduction - assuming fixed amounts for simplicity, adjust according to your criteria
    const nssf = calculateNSSF(grossSalary); 

    const netSalary = grossSalary - paye - nhif - nssf;

    document.getElementById('result').textContent = `Net Salary: Ksh ${netSalary.toFixed(2)}`;
});

function calculatePAYE(grossSalary) {
    // Simplified calculation, extend logic based on actual tax bands
    let paye = 0;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = 2400 + ((grossSalary - 24000) * 0.25);
    } else {
        paye = 2400 + 8333 * 0.25 + ((grossSalary - 32333) * 0.3);
    }
    return paye;
}

function calculateNHIF(grossSalary) {
    // Simplified, use actual NHIF bands for precise calculation
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    // Add more bands as necessary
    return 1700; // Default for 100,000 and above
}

function calculateNSSF(grossSalary, nssfRate) {
    // Simplified, adjust based on actual NSSF calculation
    return grossSalary * nssfRate; // Example fixed amount
}
