function freteGratis(valor){
    if(valor >= 150)
    {
        if(valor >= 500)
        {
            return "Frete gratuito + 10% de desconto!";
        }
        else{
            return "Frete gratuito e sem desconto!";
        }
        
    }
    else
    {
        return "Frete pago e sem desconto!";
    }
    
}

function resposta(valor){
    alert(freteGratis(valor));
}

// function freteGratisMaisDesconto(valor){
//     if(valor >= 500)
//     {
//         return "Frete gratuito + desconto!";
//     }
//     else
//     {
//         return "Frete pago + valor normal!"
//     }
    
// }

//export {freteGratis, freteGratisMaisDesconto}

// module.exports = {freteGratis,freteGratisMaisDesconto};

module.exports = {freteGratis};