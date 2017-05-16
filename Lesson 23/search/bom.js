window.$ = function() {
    let array = []
    return array
}

$.bom = {
    openAtCenter: function(width, height, url) {
        //         window.open(url,'_blank','width='+width+'px'+',height='+height+'px')
        window.open(url, '_blank', `width=${width}px,
                                  height=${height}px,
                                  screenX=${screen.width/2-width/2}px,
                                  screenY=${screen.height/2-height/2}px`)

    },
    search: function(name, value) {

        let searchAll = function() {
            let result = {}
            let search = window.location.search
            if (search[0] === '?') {
                search = search.slice(1)
            }
            let searchArray = search.split('&')
            for (let i = 0; i < searchArray.length; i++) {
                let parts = searchArray[i].split('=')
                    //                     console.log(parts)
                result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1] || '')
            }
            //                 return decodeURIComponent(result[name])
            return result
        }

        let result = searchAll()
        console.log(result)



        if (value === undefined) {
            return result[name]
        } else {
            if (result[name] === undefined) {
                location.search += `&${encodeURIComponent(name)}=${encodeURIComponent(value)}`
            } else {
                result[name] = encodeURIComponent(value)
                let newSearch = '?'
                for (let key in result) {
                    newSearch += `${encodeURIComponent(key)}=${encodeURIComponent(result[key])}&`
                }
                //                     console.log(newSearch)
                //                      location.search=newSearch
            }

        }

    }
}

function search() {
    let inputName = document.getElementsByTagName('input')[0].value
    let inputValue = document.getElementsByTagName('input')[1].value
    $.bom.search(inputName, inputValue)

}
button1.addEventListener('click', search)
