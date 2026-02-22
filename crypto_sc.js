async function crypto(par) {
    try{

        const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${par}`);
        if (!response.ok) throw new Error("Falha no request");

        const Dados = await response.json();
        return parseFloat(Dados.price);
    }catch(error){
        console.error("Erro ao buscar Dados", error.message)
    }
}

module.exports = {  crypto  };