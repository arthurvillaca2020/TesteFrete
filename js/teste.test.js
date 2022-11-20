const teste = require('./teste.js');
const freteGratis = teste.freteGratis;
// const freteGratisMaisDesconto = teste.freteGratisMaisDesconto;

describe('Testar frete', () => {
    it('testar frete gratis + desconto', async () =>  {
        expect(freteGratis(600)).toBe("Frete gratuito + 10% de desconto!")
        
    }) 

    it('testar frete gratis e sem desconto', async () =>  {
        expect(freteGratis(200)).toBe("Frete gratuito e sem desconto!")
        
    }) 

    it('testar frete pago e sem desconto', async () =>  {
        expect(freteGratis(100)).toBe("Frete pago e sem desconto!")
        
    }) 
 
    // it('testar frete + desconto', async () => {
    //     expect(freteGratisMaisDesconto(600)).toBe("Frete gratuito + desconto!")
    //     expect(freteGratisMaisDesconto(100)).toBe("Frete pago + valor normal!")
    // })
 }
)

