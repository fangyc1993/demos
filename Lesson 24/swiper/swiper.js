window.slides = function(element) {
    var $el = $(element)
    let $view = $el.children('.view')
    var width = $el.width()
    var count = $el.find('.slide').length
    let currentIndex = 0
    let timerId

    //   var $ol = $('<ol class="controls"></ol>')
    //   for(let i=0;i<count;i++){
    //     $ol.append(`<li>${i+1}</li>`)
    //   }
    //   $el.append($ol)


    var $swiper_pagination = $('<div class="swiper-pagination"></div>')
    for (let i = 0; i < count; i++) {
        $swiper_pagination.append(`<span class="swiper-pagination-bullet"></span>`)
    }
    $el.append($swiper_pagination)
        //给默认第一个span加classname
    let $span = $($swiper_pagination.find('.swiper-pagination-bullet')[0])
    $span.addClass('swiper-pagination-bullet-active')

    //   $ol.on('click','li',function(e){
    //     let $li = $(e.currentTarget)
    //     let index = $li.index()
    //     goToSlide(index)
    //   })

    function becomeActive(index) {
        if (index < 0) {
            index = count - 1
        } else if (index >= count) {
            index = 0
        }
        let $span = $('.swiper-pagination-bullet')
        $span.eq(index).addClass('swiper-pagination-bullet-active')
        $span.eq(index).siblings().removeClass('swiper-pagination-bullet-active')
    }

    $swiper_pagination.on('click', 'span', function(e) {
        let $span = $(e.currentTarget)
        let index = $span.index()
        goToSlide(index)
        becomeActive(index)
    })

    $view.on('mouseenter', function() {
        window.clearInterval(timerId)
    })

    $view.on('mouseleave', function() {
        autoPlay()
    })

    function goToSlide(index) {
        if (index < 0) {
            index = count - 1
        } else if (index >= count) {
            index = 0
        }
        //当index为0时,做个假的第一个,制作轮播效果
        if (index === 0) {
            let $li = $el.find('.slide').eq(0).clone()
            $li.appendTo($view) //插入第一个区块到最后一个
                //添加了一个的动画
            let number = -width * count
            $view.css({
                    transform: `translateX(${number}px)`
                })
                //绑定动画结束事件
            $view.one('transitionend', function() {
                $li.remove()
                let oldTransition = $view.css('transition')
                $view.css({
                    transition: 'none',
                    transform: 'translateX(0px)'
                })
                $view.offset() //分开上下两个动画阶段,防止合并
                $view.css('transition', oldTransition)
                currentIndex = index
                becomeActive(currentIndex)
            })
            return
        }

        let number = -width * index
        $view.css({
            transform: `translateX(${number}px)`
        })
        currentIndex = index
    }

    function autoPlay() {
        timerId = setInterval(function() {
            goToSlide(currentIndex + 1)
            becomeActive(currentIndex)
        }, 3000)
    }
    autoPlay()

}
