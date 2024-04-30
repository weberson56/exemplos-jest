test('divisao', () => {
    let a = 10
    let b = 2
    let resultado = divisao(a,b)
    expect(resultado).toBe(5)
});

function divisao(a,b){
    return a / b
}