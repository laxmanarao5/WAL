// let s1="good morning";
// // let s2=new String("Hello");
// // console.log(typeof s1);
// // console.log(typeof s2);

// // console.log(s1.toUpperCase())

// console.log(s1.slice(1,3))
// console.log(s1.substring(3,1))   //It will adjust the start and end Eg : substring(3,1)
// console.log(s1.substr(1,4))      // May be removed in future version of js ,will start at start value and print second argument number of characters



// let s2="hi and hi";
// console.log(s2.replace("hi","hello"))
// console.log(s2.replaceAll("hi","hello"))
// console.log("laxman".concat("rao"))
// console.log(s2.charAt(2))
//console.log(s2.at(-1))   // can get characters with negative indexing


// let str="good morning all";
// let result=str.split(" ")
// console.log(result)


// let s3=new String("hi")
// let s4=new String("hi")

// console.log(s3==s4)
// console.log(s3.localeCompare(s4))

// console.log(str.indexOf("morning"))



str="Good morning to all of you";

let result=str.split(" ")
console.log("No of words in the string",result.length)
for(word of result)
{
    console.log(word,"- characters are ",word.length)
}
