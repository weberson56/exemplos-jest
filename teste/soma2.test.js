discribe('soma',() => {
    discribe('a soma de dois valor',()=>{
        test('soma de valores', () => {
            expect(soma(5,5)).toBeInstanceOf(Error)
        });
    })
})

function soma(a,b) {
    let [x,y] = (Number(a),Number(b))

    if (isNaN (x) || isNaN(y))
        throw Error('erro');
    return x + y
}