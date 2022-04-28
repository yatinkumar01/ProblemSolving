// Hassan has discovered his own sorting algorithm. The algorithm has following conditions:
//
// 1. Given an integer k,  sort the values in the array according to their modulo with k.
// That is, if there are two integers a and b, and a%k < b%k, then a would come before b in the sorted array.
// 2. If a%k = b%k, then the integer which comes first in the given array remains first in the sorted array.
//
// Your task is to write a program that sorts the given array as per above mentioned condition and print the sorted array.

// INPUT: arr= 12 18 17 65 46
// OUTPUT: arr= 12 18 46 17 65

var arr= [12, 18, 17, 65, 46]
var k= 6

for(var i=0; i<arr.length; i++)
    {
      for(var j=0; j<arr.length-1-i; j++)
      {
        if(arr[j] % k > arr[j+1] % k)
        {
          swap(j,j+1,arr)
        }
      }
    }

    console.log(arr.join(" "))

    function swap(i,j,arr)
    {
        var temp= arr[i]
        arr[i]= arr[j]
        arr[j]= temp
    }
