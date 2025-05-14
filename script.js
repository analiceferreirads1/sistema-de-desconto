const botao = document.getElementById("calcularBtn");
const inputCliente = document.getElementById("tipoCliente")
const inputCompra = document.getElementById("valorCompra");
const mensagem = document.getElementById("mensagemDesconto");

botao.addEventListener("click", function () {
    const tipo = inputCliente.value.toLowerCase(); //transforma texto para minúsculo
    const valorCompra = parseFloat(inputCompra.value); //pega o valor da compra, converte para número
    let desconto;
    let valorFinal;


    if (tipo === "premium") {
        desconto = 30;
    }

    else if (tipo === "ouro") {
        desconto = 20;
    }

    else if (tipo === "prata") {
        desconto = 10;
    }

    else {
        desconto = 0;
    }

    if (isNaN(valorCompra) || valorCompra <= 0) {
        mensagem.textContent = "⚠️ Por favor, digite um valor de compra válido.";
        mensagem.style.color = "red";
        return;
    }

    valorFinal = valorCompra - (valorCompra * desconto / 100);

    mensagem.style.color = "#1a1a1a";
    mensagem.textContent = `🧾 Seu desconto é de ${desconto}% O valor final é R$${valorFinal.toFixed(2)}`;

});
