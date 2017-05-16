var button = document.querySelector('#start')
var total = 2 * 3600 * 1000 //固定两小时倒计时
var sign = false
button.addEventListener('click',function(){
    if(sign){
        return
    }
    sign = true
    var id = setInterval(function(){
        if(total <= 0){
            clearInterval(id)
        }
        total -= 1000

        var hour = Math.floor((total % (1000 * 60 * 60 * 24)) /  (1000 * 60 * 60),10)
        var minute = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60),10)
        var second = Math.floor((total % (1000 * 60)) / 1000)

        timeLeft.innerText = `${hour}:${minute}:${second}`

    },1000)
})
