var select = document.querySelector('#s')
var div = document.createElement('div')
div.innerHTML = select.outerHTML //获取select的HTML
select.parentNode.insertBefore(div, select)  //将div插入到select前面
select.remove() //移除原有的select
div.style.display = 'inline-block'
div.style.position = 'relative'

//创建一个div2相对定位于div,在CSS中制作下拉三角
var div2 = document.createElement('div')
div.appendChild(div2)
div2.style.border = '1px solid #E4E4E4'
div2.style.padding = '0 .5em'
div2.style.position = 'absolute'
div2.style.width = '100%'
div2.style.height = '100%'
div2.style.top = 0
div2.style.left = 0
div2.innerText = '选择'
div2.className = 'xxx'
div2.style.fontSize = '5px'

//将select放到上面来
var select = div.querySelector('#s')
select.style.position = 'relative'
select.style.zIndex = 1
select.style.opacity = 0

select.addEventListener('change', function(){
    let option = div.querySelector(`select>option[value = "${this.value}"]`)
    div2.innerText = option.innerText
})
