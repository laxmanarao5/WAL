let arr=[9,10,45,78,34,15];
console.log(arr.map(function (element){
    if(element<10)
    {
        return element+5;
    }
    else if(element >21 && element<30)
    {
        return element+7;
    }
    else if(element>=30)
    {
        return element+10;
    }
}))