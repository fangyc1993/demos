// var allImages = document.getElementsByTagName('img')
// var img = allImages[0]
// var url = img.getAttribute('data-src')
// var tempImage = new Image()
// tempImage.src = url
// tempImage.onload = function(){
//     img.src = url
// }

var allImages = document.getElementsByTagName('img')
 var i
 for(i = 0; i < allImages.length; i++){
     let img = allImages[i]  
     let url = img.getAttribute('data-src')
     let tempImage = new Image()
     tempImage.src = url
     tempImage.onload = function(){
         img.src = url
     }
 }
