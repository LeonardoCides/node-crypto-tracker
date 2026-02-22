async function atualizar(moed, valor) {
    if(valor){
        console.clear()
        console.log("================================");
        console.log(`   MONITOR DE CRIPTOMOEDAS      `);
        console.log("================================");
        console.log(` Ativo:  ${moed}`);
        console.log(` Preço:  $ ${valor.toFixed(2)}`);
        console.log("--------------------------------");
        console.log(` Atualizado em: ${new Date().toLocaleTimeString()}`);
        console.log(" Use Ctrl + C para sair");
    }
}

module.exports = {  atualizar };