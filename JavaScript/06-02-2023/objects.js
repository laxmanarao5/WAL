// let employee={
//     name:"laxman",
//     age:23,
//     basic:10000,
//     skills:["js","python","aws"],
//     address:{
//         street:"anjaih nagr",
//         pincode:500301,
//         city:"Hyd"
//     },
//     getSalary:function()
//     {
//         let hra=0.15*this.basic;
//         let da=0.10*this.basic;
//         return this.basic+hra+da;
//     }

// }
// console.log(employee.getSalary())

// let student={
//     sno:53,
//     name:"laxman",
//     age:20,
//     marks:[50,60,70,89,82,90],
//     getAggregate:function(){
//         return this.marks.reduce((element,accumulator)=>element+accumulator)/this.marks.length;
//     }

// }
// console.log(student.getAggregate())

// let students=[
//     {
//         name:"ravi",
//         age:20
//     },
//     {
//         name:"bhanu",
//         age:30
//     },
//     {
//         name:"kiran",
//         age:26
//     },{
//         name:"madhu",
//         age:37
//     },{
//         name:"vikas",
//         age:30
//     }
// ]
// console.log(students.filter(element=>element.age>20 && element.age<30))


// //With findIndex
// index=students.findIndex(element=>element.name=="madhu")
// if(index==-1)
// {
//     console.log("Not present")
// }
// else
// {
//     console.log(students[index])
// }

// //With index
// index=students.find(element=>element.name=="Aakhas")
// if(typeof(index)=="undefined")
// {
//     console.log("Not present")
// }
// else
// {
//     console.log(index)
// }




//Constructor Approach

//Add method to prototype of object 
//Old Technology before 

// Employee.prototype.getSalary=function()
// {
//     let hra=0.15*this.basic;
//     let da=0.1*this.basic;
//     return this.basic+hra+da;
// }

// function Employee(empId,name,age,basic)
// {
//     this.empId=empId;
//     this.name=name;
//     this.age=age;
//     this.basic=basic;
// }

//Class Approach
class Employee{
    constructor(empId,name,age,basic)
    {
        this.empId=empId;
        this.name=name;
        this.age=age;
        this.basic=basic;
    }
    getSalary=function()
    {
        let hra=0.15*this.basic;
        let da=0.1*this.basic;
        return this.basic+hra+da;
    }
    
}
let emp1=new Employee(100,'laxman',20,10000);
let emp2=new Employee(589,'laxman',21,20000);
console.log(emp1)
console.log(emp1.getSalary())
console.log(emp2)
console.log(emp2.getSalary())


class Manager extends Employee
{

}

let emp3=new Manager()
console.log(emp3)

console.log(emp1.__proto__)