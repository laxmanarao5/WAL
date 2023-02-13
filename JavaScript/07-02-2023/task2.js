let str="aaabbabababababababbaaaa";
console.log(str.split("").filter(element=>element=="a").length)
console.log(str.split("").filter(element=>element=="b").length)

// let a=0;
// let b=0;
// for(char of str)
// {
//     if(char=="a")
//     {
//         a+=1;
//     }
//     if(char=="b")
//     {
//         b+=1;
//     }
// }
// console.log(a)
// console.log(b)