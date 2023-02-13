class Test
{
    a=10;    //instance variable
   static b=20;  //Static variable
   test2(){
    console.log("Test2 called")
   }
   static test1()
   {
    console.log("Static method called")
   }
}
let obj=new Test();
console.log(obj.a)
console.log(obj.test2())
console.log(Test.b)
console.log(Test.test1())


class Test2 extends Test{

}
console.log(Test2.b)
let obj1=new Test2();
console.log(obj1.a)
