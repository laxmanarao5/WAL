//Optinal chaining
let person={
    email:"lakshmana5296@gmail.com",
    address:{
        street:"lax",
        city:"Hyd",
        pin:"532429"
    }
}
//console.log(person.address.pin.length) // Results an error
console.log(person.address.pin?person.address.pin.length:"Data not available")
console.log(person.address.pin && person.address.pin.length)