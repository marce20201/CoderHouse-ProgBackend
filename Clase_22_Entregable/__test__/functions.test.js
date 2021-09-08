const {suma,resta,multiplica,divide} = require('../index')

describe('Funciones de Testing',()=>{
    it('Debe retornar la suma entre dos numeros',()=>{
        const res = suma(1,1)
        expect(res) > 0
    })

    it('Debe retornar la resta entre dos numeros',()=>{
        const res = resta(2,1)
        expect(res) == 1
    })

    it('Debe retornar la multiplicacion entre dos numeros',()=>{
        const res = multiplica(2,2)
        expect(res) == 4
    })

    it('Debe retornar la division entre dos numeros',()=>{
        const res = divide(4,2)
        expect(res) == 2
    })
})