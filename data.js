const Data = {

    surnames:["王","李","张","刘","陈","赵","周","吴","郑","孙"],
    names:["宇轩","子墨","清宁","若曦","嘉诚","安然","思远","知夏"],

    randomName(){
        return this.surnames[Math.floor(Math.random()*this.surnames.length)] +
               this.names[Math.floor(Math.random()*this.names.length)]
    }

}

let GameState = {

    year:0,
    player:null,
    log:[],

    init(){
        this.player = {
            name: Data.randomName(),
            age:0,
            money:20000,
            health:80,
            mental:70,
            charm:50,
            mbti:"????",
            job:"无",
            level:0,
            fame:0,
            crime:0,
            prison:0,
            phone:false,
            family:[],
            children:[],
            relations:[]
        }

        this.log.push("你出生了。")
    }

}
