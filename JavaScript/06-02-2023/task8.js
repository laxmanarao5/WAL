// Product.prototype.getDiscountPrice=function(disc)
// {
//     let discount= (this.disc/100)*this.price;
//     return this.price-discount;
// }
// function Product(brand,price,model,discount)
// {
//     this.brand=brand;
//     this.price=price;
//     this.model=model;
//     this.discount=discount;
// }
 
// Using classes

class Product{
    constructor(brand,price,model)
    {
        this.brand=brand;
        this.price=price;
        this.model=model;
    }
    getDiscountPrice=function(disc)
    {
        let discount= (disc/100)*this.price;
        return this.price-discount;
    }

}

let p1=new Product("Adidas",1000,"th12")
console.log(p1.getDiscountPrice(20))
let p2=new Product("Puma",2000,"th12")
console.log(p2.getDiscountPrice(30))
let p3=new Product("Adidas",3000,"th12")
console.log(p3.getDiscountPrice(40))
let p4=new Product("Adidas",5000,"th12")
console.log(p4.getDiscountPrice(70))
let p5=new Product("Adidas",6000,"th12")
console.log(p5.getDiscountPrice(23)) 
