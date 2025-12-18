class Parquimetro {
    constructor() {
        this.tabelaPreco = [
            { valor: 3.00, tempo: 120 },
            { valor: 1.75, tempo: 60 },
            { valor: 1.00, tempo: 30 }
        ]
    }


    calcular() {
        const valorInput = document.getElementById('valor')
        const tela = document.getElementById('tela')

        const valorPago = parseFloat(valorInput.value.replace(',', '.'))

        let tempo = 0
        let troco = 0

        if (valorPago >= 3) {
            tempo = 120
            troco = valorPago - 3
            tela.style.color = "#1e9700ff"
        } else if (valorPago >= 1.75) {
            tempo = 60
            troco = valorPago - 1.75
            tela.style.color = "#1e9700ff"
        } else if (valorPago >= 1) {
            tempo = 30
            troco = valorPago - 1
            tela.style.color = "#1e9700ff"
        } else {
            document.getElementById('tela').textContent = 'Insira um valor em R$:'
            tela.style.color = "#970000ff"
            return
        }

        document.getElementById('tela').textContent = `Você recarregou R$:${valorPago.toFixed(2)}\nTempo restante ${tempo}min\nTroco:${troco.toFixed(2)}`
    }
}
const sistema = new Parquimetro()

