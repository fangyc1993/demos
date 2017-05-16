	// var bigcircle = document.getElementsByClassName('bigcircle')[0]
// function fn(){
//   var x = Math.random()*90 - 45
//   var y = Math.random()*90 - 45
//   bigcircle.style.transform = 'rotateX('+x+'deg) rotateY('+y+'deg)'

//   console.log(bigcircle.style.transform)
// }


// var id =setInterval(function(){
//  fn() 
//  console.log('id')
//  console.log(id)
// },1000)
var x = 0,
    y = 0

function step() {
    //$需要引入jquery
    $('.bigcircle').css({
        transform: 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)'
    })
    x = Math.random() * 90 - 50
    y = Math.random() * 90 - 50

    setTimeout(step, 1000)
}

step()
