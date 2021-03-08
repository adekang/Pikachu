console.log('这是text')
import string from './css.js'

//声明对象
const player = {
    n: 1,
    times: 100,
    id: undefined,
    ui: {
        demo: document.querySelector("#demo"),
        demo2: document.querySelector("#demo2")
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: () => {
        player.ui.demo2.innerText = string.substr(0, player.n)
        player.ui.demo.innerHTML = string.substr(0, player.n)
        player.play()
        player.bindEvents()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        player.n++;
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        //添加样式
        player.ui.demo.innerHTML = string.substr(0, player.n)
        //文本显示
        player.ui.demo2.innerText = string.substr(0, player.n)
        //高度等于文本的高度
        player.ui.demo2.scrollTop =  player.ui.demo2.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.run, player.times)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.times = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.times = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.times = 0
        player.play()
    }
}

player.init()



