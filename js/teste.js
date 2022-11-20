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
    var resposta = freteGratis(valor);
    if(resposta == "Frete gratuito + 10% de desconto!"){
        location.replace("html1.html")
    }
    else if(resposta == "Frete gratuito e sem desconto!"){
        location.replace("html2.html")
    }
    else{
        location.replace("html3.html")
    }
}

function voltar()
{
    location.replace("tela.html")
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
