
var employees =

{
    employees: [
        {
            "firstname": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": "40000",
            "raise_eligible": "true"
        },
        {
            "firstname": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": "18500",
            "raise_eligible": "true"
        },
        {
            "firstname": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": "21200",
            "raise_eligible": "false"
        },
        {
          "firstname": "Anna",
          "department": "Tech",
          "designation": "Executive",
          "salary": "25600",
          "raise_eligible": "false"
      }

    ]
}

var company =
{
    "company_name": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [],
}


console.log(JSON.stringify(company))
company.employees = employees.employees
console.log(JSON.stringify(company))


console.log('4.')
function totalsalary() {
    var totalsalary = 0;
    for (employee of company.employees) {
        totalsalary = totalsalary + Number(employee.salary)
    }
    console.log("the total salary for the company =");
    console.log(totalsalary);
} 
totalsalary()

console.log('5.')
function raise() {
    for (employee of company.employees) {
        employee.salary = String(Number(employee.salary) * 1.1)
        employee.raise_eligible = false
    }
    console.log(JSON.stringify(company))
}
raise()

console.log('6.')
function home(array) {
    for (let i = 0; i < company.employees.length; i++) {
        let employee = company.employees[i];
        let wfh = array.includes(employee.firstname) ? true : false;
        employee.wfh = wfh;
    }
    console.log(JSON.stringify(company));
}
home(["Anna","Sam"])
