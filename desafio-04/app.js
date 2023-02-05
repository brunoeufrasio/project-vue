new Vue({
	el: '#desafio',
	data: {
		classe1:'destaque',
		aplicarC1: true,
		estilo: '',
		estilo2: '',
		perigo: true,
		whidth: '0'

	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher': 'destaque'
				
			}, 1000);
	
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.whidth = `${valor}%`
				if (valor == 100) clearInterval(temporizador)							
			}, 500);

		},
		setPerigo(event){
			if (event.target.value == 'true'){
				this.perigo = true
			}else{
				if (event.target.value == 'false'){
					this.perigo = false
				}
			}

		}
	}
})
