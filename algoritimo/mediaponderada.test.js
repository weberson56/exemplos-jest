import { mediaponderada } from './mediaponderada';

describe('media de notas', () => {
    test('caso 01', () => {
        let n1 = 8, n2 = 8, n3 = 8, n4 = 8;

        let res  = mediaponderada(n1,n2,n3,n4);
        expect(res).toBe("aprovado")
        
    });
    test('caso 02', () => {
        let n1 = 1, n2 = 2, n3 = 3, n4 = 5,  p1 = 1, p2 = 2, p3 = 3, p4 = 4;

        let res  = mediaponderada(n1,n2,n3,n4, p1, p2, p3, p4);
        expect(res).toBe("reprovado")
        
    });
    test('caso 03', () => {
        let n1 = 8.5, n2 = 8, n3 = 7, n4 = 6.5;

        let res  = mediaponderada(n1,n2,n3,n4);
        expect(res).toBe("aprovado")
        
    });
    test('caso 04', () => {
        let n1 = '7', n2 = '8', n3 = '9', n4 = '10';

        let res  = mediaponderada(n1,n2,n3,n4);
        expect(res).toBe("aprovado")
        
    });
    test('caso 05', () => {
        let n1 = 1, n2 = 1, n3 = 1, n4 = 10, p1='1', p2='2', p3='3', p4='4';

        let res  = mediaponderada(n1,n2,n3,n4,p1, p2, p3, p4);
        expect(res).toBe("reprovado")
        
    });
});