function freteGratis(valor) {
  if (valor >= 150) {
    return "Frete gratuito!";
  } else {
    return "Frete pago!";
  }
}
function freteGratisMaisDesconto(valor) {
  if (valor >= 500) {
    return "Frete gratuito + desconto!";
  } else {
    return "Frete pago + valor normal!";
  }
}

//export {freteGratis, freteGratisMaisDesconto}

module.exports = {
  freteGratis,
  freteGratisMaisDesconto
};