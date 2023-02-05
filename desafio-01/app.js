 new Vue({
    el:'#desafio',
    data:{
        nome:'Bruno Eufrasio',
        idade: 34,
        imagem: 'https://uploads.metropoles.com/wp-content/uploads/2019/11/23203759/1916.jpg'
    },
    methods:{
        getNumeroAleatorio: function(){
            return Math.random()
        }
    }
})

