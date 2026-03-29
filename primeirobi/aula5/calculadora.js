const valorConta = 100;
const percentualGorjeta = 15;

function mostrarCalculo(valorConta, percentualGorjeta) {
  const valorGorjeta = valorConta * (percentualGorjeta / 100);
  const valorTotal = valorConta + valorGorjeta;

  if (!isNaN(valorConta) && !isNaN(percentualGorjeta)) {
    mensagem = `Valor da Conta: R$${valorConta.toFixed(2)}, Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}, Total a pagar: R$${valorTotal.toFixed(2)}`;
    console.log(mensagem);
  }
}

mostrarCalculo(valorConta, percentualGorjeta);
