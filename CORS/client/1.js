function test(){
    fetch("http://localhost/test").then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err))


}

let btn = document.querySelector("button")
btn.addEventListener('click',test)