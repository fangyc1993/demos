var banner_3d = document.getElementsByClassName('banner-3d')[0]
var banner_3d_mask = document.querySelector('.banner-3d-mask')

function step(e) {
    var banner_3dRect = banner_3d.getBoundingClientRect()
    var width = banner_3dRect.width
    var height = banner_3dRect.height
    var xCenter = banner_3d.offsetLeft + width / 2
    var yCenter = banner_3d.offsetTop + height / 2
    var xDiff = e.clientX - xCenter
    var yDiff = e.clientY - yCenter
    var xPersent = xDiff / (width / 2)
    var yPersent = yDiff / (height / 2)

    var xDeg = xPersent * 2
    var yDeg = yPersent * 2

    banner_3d_mask.style.transform = 'translateZ(-50px) rotateX(' + -yDeg + 'deg) rotateY(' + xDeg + 'deg)'
        // banner_3d_mask.style.transform = ` translateZ(-50px) rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`
}

banner_3d.addEventListener('mousemove', step)


// var banner_3d = document.querySelector('div')
// var banner_3d_mask = document.getElementsByClassName('banner-3d-mask')[0]

// function step(e) {

//     var react = banner_3d.getBoundingClientRect()
//     var width = react.width
//     var height = react.height
//     var xCenter = banner_3d.offsetLeft + width / 2
//     var yCenter = banner_3d.offsetTop + height / 2
//     var xDiff = e.clientX - xCenter
//     var yDiff = e.clientY - yCenter
//     console.log(xDiff, yDiff)
//     var xPersent = xDiff / (width / 2)
//     var yPersent = yDiff / (height / 2)


//     var xDeg = xPersent * 5
//     var yDeg = yPersent * 5

//     banner_3d_mask.style.transform = ` translateZ(-50px) rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`
// }

// banner_3d.addEventListener('mousemove', step)
