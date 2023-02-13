let arr=[1,2,3,4,5,6,7,8];
function primeOrNot(number)
{
    if(number==2)
    {
        return true;
    }
    else if(number==1 || number==0)
    {
        return false;
    }
    for(let i=2;i<number;i++)
    {
        if(number%i==0)
        {
            return false;
        }

    }
    return true;
}
for(element of arr)
{
    if(primeOrNot(element))
    {
        console.log(element)
    }
}