var button = document.getElementById('goToTop')
button.onclick = function (){
    
    var height = window.scrollY//获取scroll的当前位置
    var n = 0
    //设定1000ms滚完,滚20次,间隔50ms
    var id = setInterval(function(){
        if ( n === 20 ){
            clearInterval(id)
        }
        // window.scrollTo(0,height - height* n / 20)
        window.scrollBy(0,- height * n / 20)
        n += 1
    },50)
}
