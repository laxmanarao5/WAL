//generator function
function* test()
{
    yield 1;
   //yield is similar to return ,but statements after yield are gets executed, it pauses at every yield , and start execution from the paused yield by calling it with .next()
   yield 2;
}

//create generator object

let generatorObj=test()
console.log(generatorObj)
console.log(generatorObj.next())  //{value: 1, done: false}
console.log(generatorObj.next())   //{value: 2, done: false}
console.log(generatorObj.next())    //{value: undefine, done: true}   //as default last statement of any function is return undefined; 


console.log(generatorObj.return(100))  //.return is used to stop generator function by returnung it parameter

let generatorObj1=test() //We can create as many generators as you want and every generator is independent of other
console.log(generatorObj1.next()) 
console.log(generatorObj1.next()) 
console.log(generatorObj1.next()) 


let generatorObj2=test()
console.log(generatorObj2.next()) 
console.log(generatorObj2.next()) 
console.log(generatorObj2.next())  

function* test2()
{
    let val=1;
    while(true)
    {
        yield val;
        val++;
    }

}
let generatorObj3=test2()
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
console.log(generatorObj3.next())
console.log(generatorObj3.next()) 
console.log(generatorObj3.next()) 
