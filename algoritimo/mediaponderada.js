export function  verificaSituacao(n1, n2, n3, n4, p1 = 1, p2 = 1, p3 = 1, p4 = 1){
    return (n1 * p1 + n2 * p2 + n3 * p3 + n4 * p4 ) / (p1*1 + p2*1 + p3*1 + p4*1)
}

export function verificaAprovacao(presenca = 0.75){

    if(presenca >= 0.75){
        return true
    }else{
        return false
    }
}

export function mediaponderada(n1, n2, n3, n4, p1 = 1, p2 = 1, p3 = 1, p4 = 1, presenca){

    
    let media = verificaSituacao(n1, n2, n3, n4, p1, p2, p3, p4)

    if (media >= 7){
        return "aprovado"
    }else{
        return "reprovado"
    }
    
}