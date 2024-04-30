describe("soma", ()=> {
    describe("a soma de dois numeros ", ()=>{
        test('soma de 3 a 5 deve ser iqual a 8', () => {
            expect(soma(3,5)).toBe(8)
        });
        test('soma de 0 a 0 deve ser iqual a 0', () => {
            expect(soma(0,0)).toBe(0)
        });
    })
})




describe('soma', () => {
    describe('a soma de dois numeros inteiros', () => {
        test('a soma de 5 e 5 devera so 10', () => {
            expect(soma('5','5')).toBe(10)
            
        });
        test('a soma de 3 e 3 devera so 10', () => {
            expect(soma('3','3')).toBe(6)
            
        });
        
    });
    
});


describe('soma', () => {
    describe('a soma de duas string deve gerar uma mensagem de erro ', () => {
        test('a soma de abc e 2 tem que dar erro ', () => {
            expect(() => soma('ABC',2)).toThrow(Error)
        });
        test('a soma de abc e 2 tem que dar erro ', () => {
            expect(() => soma('2',ABC)).toThrow(Error)
        });
        test('a soma de sbc e 2 tem que dar erro',() =>{ 
            expect(() => soma(2,'abc').toThrow(Error))
        });
        
    });
    
});

function soma(a,b) {
    let [x,y] = [Number(a),Number(b)]

    if (isNaN (x) || isNaN(y))
        throw Error('erro');
    return x + y

    
}