	window.$ = function() {
    let array = []
    return array
}

$.bom = {
    openAtCenter: function(width, height, url) {
        //         window.open(url,'_blank','width='+width+'px'+',height='+height+'px')
        window.open(url, '_blank', `width=${width}px,height=${height}px,screenX=${screen.width/2-width/2}px,screenY=${screen.height/2-height/2}px`)
        console.log(screen.height / 2 - height / 2)
    }
}
