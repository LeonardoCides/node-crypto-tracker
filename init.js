const {crypto} = require('./crypto_sc')
const {atualizar} = require('./atualizacao')
const moed = 'BTCUSDT';

async function iniciar() {
    const Valor = await crypto(moed);
    atualizar(moed,Valor)
}
iniciar()
setInterval(iniciar, 1000)
