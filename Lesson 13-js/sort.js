var arr = [233,1,100,23,53,42,244,88,1,2,9]
var n = 0 //外层循环 
while(n < arr.length){
    var m = 0 //内层循环
    while(m < (arr.length - 1 - (n -1))){
        if(arr[m] >= arr[m + 1]){
            var temp
            temp = arr[m]
            arr[m] = arr[m + 1]
            arr[m + 1] = temp
        }
        m = m + 1
    }
    n = n + 1
}
console.log(arr)
