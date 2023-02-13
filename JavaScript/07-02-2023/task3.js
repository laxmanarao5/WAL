// function reverse(string)
// {
//     res=""
//     for(let i=string.length-1;i>=0;i--)
//     {
//         res+=string.at(i);
//     }
//     return res;
// }
// console.log(reverse("laxman rao"))


let reverse=string=>string.split("").reverse().reduce((char,acc)=>char+acc)
console.log(reverse("laxman rao"))

