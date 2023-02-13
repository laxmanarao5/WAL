function evenFactors(number)
{
    for(let i=2;i<=number;i+=2)
    {
        if(number%i==0)
        {
            console.log(i);
        }
    }
}
evenFactors(100);