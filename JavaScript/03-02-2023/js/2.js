function primeNumbers(first,second)
{
    for(let i=first;i<second;i++)
    {
        flag=0;
        for(let j=2;j<i/2;j++)
        {
            if(i%j==0)
            {
                flag=1;
                break;
            }
        }
        if(flag==0)
        {
            console.log(i);
        }
    }
}
primeNumbers(20,50);