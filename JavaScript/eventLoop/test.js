// const fs=require("fs")

// fs.readFile("./data.txt",(err,data)=>{
//     console.log("Data fetched")
// })
// setImmediate(()=>{
//     console.log("Immediate")
// })

// setTimeout(()=>{
//     console.log("Timeout executedd")
// },0)
// const baz=()=>console.log("baz")
// const foo=()=>console.log("foo")
// const zoo=()=>console.log("zoo")
// const start=()=>{
//     console.log("start")
//     setImmediate(baz)
//     new Promise((resolve,reject)=>{
//         resolve("bar")
//     }).then((resolve)=>{
//         console.log(resolve)
//         process.nextTick(zoo)
//     })
//     process.nextTick(foo)
// }
// start()



setTimeout(()=>{
    console.log("timeout executed");
    setImmediate(()=>console.log("set immediate of timeout"))
})
process.nextTick(()=>console.log("next tick executed"))

setImmediate(()=>console.log("set immediate executed"))