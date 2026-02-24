const UI = {

    init(){

        document.getElementById("nextYearBtn")
        .addEventListener("click", ()=>Engine.nextYear())

        this.refresh()
    },

    refresh(){

        const p = GameState.player

        document.getElementById("yearDisplay")
        .innerText = "年份：" + GameState.year

        document.getElementById("statusContent").innerHTML = `
        年龄：${p.age}<br>
        金钱：${p.money}<br>
        健康：${p.health}<br>
        精神：${p.mental}<br>
        职业：${p.job}<br>
        名声：${p.fame}
        `
    },

    openPanel(type){

        const p = GameState.player
        let html=""

        if(type==="character"){
            html = `
            <div class="card">
            姓名：${p.name}<br>
            年龄：${p.age}<br>
            MBTI：${p.mbti}
            </div>`
        }

        if(type==="log"){
            html = `
            <div class="card">
            ${GameState.log.slice(-20).join("<br>")}
            </div>`
        }

        document.getElementById("content").innerHTML = html
    }

}

window.onload = function(){
    GameState.init()
    UI.init()
}
