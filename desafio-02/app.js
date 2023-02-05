new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alertaBotao(){
            alert('Alerta botão clicado')
        },
        eventoKeydown(event){
            this.valor = event.target.value       
        }
    }
})