export function verificaSituacao(n1,n2,n3,n4){
    const res = n1/4 + n2/4 + n3/4 + n4/4 /4;
    console.log(res)
    if(res >= 7 ||  isNaN(res)){
        return "aprovado"
    }else{
        return "reprovado"
    }

    
}