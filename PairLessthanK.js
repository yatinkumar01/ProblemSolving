// You are given an array A of N integers, and an integer K.
// Find the maximum value of S, such S that S = a[i] + a[j], and S < K. If no such value exists, then print -1.
// Time Complexity = O(N²)

var arr=[30,10,20]
var k= 15

var max=0
var count= false

for(var i=0; i<arr.length-1; i++)
{
  for(var j=i+1; j<arr.length; j++)
  {
    if(arr[i]+arr[j]>max && arr[i]+arr[j]<k)
    {
      max= arr[i]+arr[j]
      count=true
    }
  }
}

if(count==true)
{
  console.log(max);
}
else
{
  console.log("-1");
}
