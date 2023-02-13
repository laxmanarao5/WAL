// Employee.prototype.getSalary=function()
// {
//     let hra=0.15*this.basic;
//     let da=0.10*this.basic;
//     return this.basic+hra+da;
// }
// function Employee(name,age,basic)
// {
//     this.name=name;
//     this.age=age;
//     this.basic=basic;
// }



class Employee{
    constructor(name,age,basic)
    {
        this.name=name;
        this.age=age;
        this.basic=basic;
    }
    getSalary=function()
    {
        let hra=0.15*this.basic;
        let da=0.10*this.basic;
        return this.basic+hra+da;
    }

}

let emp1=new Employee('laxman',20,20000);
let emp2=new Employee('lokesh',20,40000);
let emp3=new Employee('chaitanya',20,30000);
let emp4=new Employee('sameer',20,20000);
let emp5=new Employee('vishnu',20,20000);
console.log(emp1.getSalary())
console.log(emp2.getSalary())
console.log(emp3.getSalary())
console.log(emp4.getSalary())
console.log(emp5.getSalary())