var arr=[9,7,4,3,1]

for(var i=0; i<arr.length; i++)
{
  for(var j=0; j<arr.length-1-i; j++)
  {
    if(arr[j]>arr[j+1])
    {
      swap(j,j+1,arr)
    }
  }
}
console.log(arr.join(" "));

  function swap(i,j,arr)
  {
    var temp= arr[i]
    arr[i]= arr[j]
    arr[j]= tem
    }
