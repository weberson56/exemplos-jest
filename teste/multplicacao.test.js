test('multplicacao', () => {
    let a = 10
    let b = 2
    let resultado = multplicacao(a,b)
    expect(resultado).toBe(20)
});

function multplicacao(a,b){
    return a * b
}