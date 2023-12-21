/*This makes the foreign currency conversion*/
function myConvertCurrency() {
    var domestic = document.getElementById("myNumber").value;
    var x = document.getElementById("NativeCurrency").value;
    var y = document.getElementById("ForeignCurrency").value;
    document.getElementById("output").innerHTML = domestic*(y/x);
  }
/*This decomposes a number into its factors and stores the factors in an array*/
function myDecompose()
{
   var composite = document.getElementById("myNumber").value;
   var i=2;
   var factors=[1];
   while (i<=composite)
   {
        if(composite%i==0)
        factors.push(i)
        i++;
        document.getElementById("output").innerHTML = factors;
   }
   
}

/*This displays whether or not a number is prime*/
function myPrime()
{
  var m =document.getElementById("myNumber").value;
  if (myIsPrime(m))
  {
     document.getElementById("output").innerHTML = "YES";
  }
  else
  {
    document.getElementById("output").innerHTML = "NO";
  }
}
/* This yields the nth term of a fibonacci series*/
function myFib()
   {
        var Fib=[1,1];//List to contain all fibonacci numbers
        var nth=document.getElementById("myNumber").value; //number of fibonnaci numbers to be displayed
        var sam=1;//temporary variable to adjust nth non-destructively
        if (nth==1)
        {
            document.getElementById("output").innerHTML = "1";
        }
        else if(nth==2)
        {
            document.getElementById("output").innerHTML = "1, 1";
        }
        else if(nth>=3)
        {  
            sam=3;
            while(sam<=nth)
            {
                Fib.push(Fib[sam-2]+Fib[sam-3]);
                sam++;
            }
            
        }
          document.getElementById("output").innerHTML = Fib;
}

/*This determine whetheror not a number is prime*/ 
function myIsPrime(composite)
{
    var i=2;
    var factors=[1];
    //Checks all the numbers from 2 up to composite to see if it is a factor
    //If so, it is added to the factors list
    while (i<=composite)
    {
        if(composite%i==0)
        factors.push(i)
        i++;
    }
    //Returns true if the number of factors is exactly 2
    if (factors.length==2)
        return true;
    else 
        return false;  
}

/*This yields all the prime factors of a number along with the corresponding power*/ 
function myPrimeFactor()
{
   var c = document.getElementById("myNumber").value; //number entered by user
   var i=1; // Factor to be tested and incremented
   var j=0; // Exponent corresponding to factor
   var w; // Temporary variable to hold c non-destructively
   var Primefactors=[]; 
   var Exponents=[];
   //Tests every number between 1 and c to see if it is a factor of c
   while (i<=c)
   {    //if i is a factor of c and is also prime add i to list   
        if(c%i==0 && myIsPrime(i))
        {
            Primefactors.push(i)
            w=c;
            j=0;
            //Loops to find the power for that factor and adds to exponents list
            while (w%i==0)
            {
                w=w/i;
                j++;
                if(w%i!=0)
                {
                    Exponents.push(j);
                }
            }
        }
        i++;
    }
    var k;
    var text=""
    //This loops through both arrays to display the values
    for (k = 0; k < Exponents.length; k++) 
    {
        text = text+ Primefactors[k].toString() + "^" + Exponents[k].toString()+"*";
    }
    document.getElementById("output").innerHTML = text.slice(0, -1);

}