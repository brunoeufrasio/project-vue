new Vue({
    el:'#app',
    data:{
        playerLife: 20,
        monsterLife:0,
        jogoIniciado: false,
        logs: []
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 | this.monsterLife == 0;
        }

    },
    methods:{
        startGame(){
            this.jogoIniciado = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        ataques(ataqueEspecial){
            this.ferir('monsterLife', 5, 10, ataqueEspecial, 'Jogador', 'Monstro', 'player')
            if(this.monsterLife > 0){
                this.ferir('playerLife', 7, 12, false,'Monstro', 'Jogador', 'monster')
            }
        },
        ferir(atr,min, max, ataqueEspecial, origemAtaque, alvoAtaque, cls){
            const plus = ataqueEspecial ? 5 : 0
            const ferir = this.getRondom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - ferir, 0)        
            this.registrarLog(`${origemAtaque} atingiu ${alvoAtaque} com ${ferir}`,cls)
        },
        curaEAtaque(){
            this.curar(10, 15)
            this.ferir('playerLife', 7, 12, false,'Monstro', 'Jogador', 'monster')
        },
        curar(min, max){
            const curar = this.getRondom(min, max)
            this.playerLife = Math.min(this.playerLife + curar, 100)
            this.registrarLo(`Jogador ganhou força de ${curar}`,'player')
        },
        getRondom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registrarLog(text, cls){
            this.logs.unshift({ text, cls })

        }

    },
    watch:{
        hasResult(value){
            if (value) this.jogoIniciado = false 
        }
        
    }
})