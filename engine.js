const Engine = {

    nextYear(){

        const p = GameState.player

        if(p.prison>0){
            p.prison--
            p.mental -= 5
            GameState.log.push("你在服刑。")
        }else{
            p.age++
            GameState.year++

            this.yearlyUpdate()
        }

        UI.refresh()
    },

    yearlyUpdate(){

        const p = GameState.player

        if(p.age >=18 && p.job!=="无"){
            p.money += 30000
        }

        if(p.age > 60){
            p.health -= 5
        }

        if(p.health<=0){
            GameState.log.push("你去世了。")
            alert("本代结束。")
        }

    }

}
