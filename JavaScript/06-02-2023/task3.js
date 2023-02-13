let arr=[1,2,3,4,5,6,7,8];
let small=arr[0];
let large=arr[0];
for(element of arr)
{
    if(element>large)
    {
        large=element;
    }
    if(element<small)
    {
        small=element;
    }
}
console.log("Small element is ",small);
console.log("Large element is ",large);