
var arr=[22,11,11,22,2,0,9,23]
var newarr= []

for(var i=0; i<arr.length; i++)
{
  var found= false
  for(var j=0; j<newarr.length; j++)
  {
    if(arr[i]==newarr[j])
    {
      found=true
      break
    }
  }
  if(found==false)
  {
    newarr.push(arr[i])
  }
}

console.log(newarr);
