
    //1.
for (let i = 1; i <= 100; i += 10) {
  console.log(i);
}
    //2.
for (var a=10; a>=1; a--)
{
    console.log(a);
}   
    //3.
for (var a=2; a<=10; a += 2)
{
    console.log(a);
}
    // 4.
for (var f=100; f>=1; f -= 10){
    console.log(f);
} 
 //  5.
var voters=[18,17,16,15,10,8,7,9,35,40,86,75,0]
for(var i=0;i<voters.length;i=i+1)
{
    if (voters[i]>=18)
    {
        console.log("eligible");

    }
    else if(voters[i] ===0)
    {
      console.log("invalid");
    }
    
    else
    {
        console.log("noteligible")
    }
   

    
}