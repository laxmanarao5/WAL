function testOut()
{
    let a=100;
    return function testIn()
    {
        let b=200
       return function testIn2()
        {
            let c=300;
            return a+b+c;
        }
    }
}
//Closer property - a duplicate data will be created and packed with returned function
let result = testOut()
let result2=result()
console.log(result2())