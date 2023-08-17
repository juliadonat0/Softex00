try {
    console.log("iniciando calculadora...");
    let input = 0;
    if (input === 0) {
        throw "valor negado";
    }
    let result = 5 / input;
} catch (erro) {
    console.log("[Erro:] Divisão por erro não permitida")
} finally {
    console.log("finalizando calculadora...\n")
}




console.log("EXERCÍCIO 1 - TRY...CATCH") // Em javascript a divisão por zero não retorna um erro. Retorna infiniy 

    try {
        if (divisor === 0) {
            throw "Valor negado"
        }
        let result = 90 / divisor;
    } catch (erro) {
        console.log(" Erro: Divisão por zero no console")
    }

//HEITOR
    console.log("EXERCÍCIO 1 - TRY...CATCH") // Em javascript a divisão por zero não retorna um erro. Retorna infiniy 
console.log(divisao(10, 0))
function divisao(dividendo, divisor) {
    try {
        return dividendo / divisor
    } catch (erro) {
        console.log(" Erro: Divisão por zero no console")
    }
}
