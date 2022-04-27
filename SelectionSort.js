var arr = [1,7,4,3,9,2]

for(var i=0; i<arr.length-1; i++)
{
  for(var j=i+1; j<arr.length; j++)
  {
    if(arr[i]>arr[j])
    {
      swap(i,j,arr)
    }
  }
}

console.log(arr.join(" "));

function swap(i,j,arr){
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
