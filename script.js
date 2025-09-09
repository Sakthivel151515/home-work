
    //1.print the numbers from 1 to 100 with the interval of 10
for (let i = 1; i <= 100; i += 10) {
  console.log(i);
}
    //2.print the number from 10 to 1
for (var a=10; a>=1; a--)
{
    console.log(a);
}   
    //3.print the multiple of 2 until 10
for (var a=2; a<=10; a += 2)
{
    console.log(a);
}
    // 4.. print the number from 100 to 1 with the difference of 10
for (var f=100; f>=1; f -= 10){
    console.log(f);
} 
 /* 5.write a function to print the eligble, Not eligble voters separately from the list
of array [18,17,16,15,10,8,7,9,35,40,86,75,0]. Note: print invalid if the voter age is 0.*/



function voters(arr)

{
  var eligible = [];
  var invalid = [];
  var noteligible = [];
  for(var i=0;i<arr.length;i=i+1)
  {
    if (arr[i]>=18)
    {
     eligible.push(arr[i]);

    }
    else if(arr[i] ===0)
    {
      invalid.push(arr[i]);
    }
    
    else
    {
        noteligible.push(arr[i]);
    }
  }
   
 return {
    eligiblevoters : eligible,
    invalidvoters : invalid,
    noteligiblevoters : noteligible


}
    
}
console.log(voters([18,17,16,15,10,8,7,9,35,40,86,75,0]))