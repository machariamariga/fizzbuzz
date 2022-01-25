/*var number=prompt("Enter a Number", "Type your number here")
number=parseInt(number);
if (number%3==0 && number%5==0)
{
    alert("fizzbuzz")
}
else if (number%5==0)
{
    alert("buzz")
}
else if (number%3==0)
{
    alert("fizz")
}
else
{
    alert("null")
}*/
for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}