
var arr = [233,1,100,23,53,42,244,88,1,2,9]
var n = 0
var min = arr[n]
while(n < arr.length){
    if(arr[n] < min){
        min = arr[n]
    }
    n = n + 1
}
console.log('最小的数:',min)
