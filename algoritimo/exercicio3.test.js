import {verificaSituacao} from "./exercicio3"

describe('media de notas', () => {
    test('caso de teste 01', () => {
        let n1 = 8, n2 = 10, n3 = 5, n4 = 5;

        let res  = verificaSituacao(n1,n2,n3,n4);
        expect(res).toBe("aprovado")
        
    });
    test('caso de teste 02', () => {
        let n1 = 8, n2 = 9, n3 = 5, n4 = 5;

        let res  = verificaSituacao(n1,n2,n3,n4);
        expect(res).toBe("reprovado")
        
    });
    test('caso de teste 03', () => {
        let n1 = 8.5, n2 = 8, n3 = 7, n4 = 6.5;

        let res  = verificaSituacao(n1,n2,n3,n4);
        expect(res).toBe("aprovado")
        
    });
    test('caso de teste 01', () => {
        let n1 = '7', n2 = '8', n3 = '9', n4 = '10';

        let res  = verificaSituacao(n1,n2,n3,n4);
        expect(res).toBe("aprovado")
        
    });
    test('caso de teste 01', () => {
        let n1 = '1', n2 = '8', n3 = '3', n4 = '1';

        let res  = verificaSituacao(n1,n2,n3,n4);
        expect(res).toBe("reprovado")
        
    });
    
});