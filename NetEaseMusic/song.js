$(function () {

    $.get('./lyric.json').then(function (object) {
        console.log(object)
        let lyric = object.lyric
        console.log(lyric)
        let array = lyric.split('\n')
        let regex = /^\[(.+)\](.*)$/
        array = array.map(function (string) {
            let matches = regex.exec(string)
            if (matches) {
                console.log(matches[1])
                console.log(matches[2])
                return { time: matches[1], words: matches[2] }
            }
        })

        let $lyric = $('.lyric')
        array.map(function (object) {
            if (!object) { return }
            let $p = $('<p/>')
            $p.attr('data-time', object.time).text(object.words)
            $p.appendTo($lyric.children('.lyric-scroll'))
        })
    })


    let audio = document.createElement('audio')'
    audio.src = 'http://122.138.54.115/m10.music.126.net/20170623184755/c207c799516175d6771834c100d237b2/ymusic/9313/cfac/35ad/332d8257716efd86d075809e61cfd5d5.mp3?wshc_tag=0&wsts_tag=594cec37&wsid_tag=318cbd68&wsiphost=ipdbm'

    audio.oncanplay = function () {
        audio.play()
        $('.disc-container').addClass('playing')
    }
    $('.icon-pause').on('click', function () {
        console.log(1)
        audio.pause()
        $('.disc-container').removeClass('playing')
    })
    $('.icon-play').on('click', function () {
        audio.play()
        $('.disc-container').addClass('playing')
    })




})
