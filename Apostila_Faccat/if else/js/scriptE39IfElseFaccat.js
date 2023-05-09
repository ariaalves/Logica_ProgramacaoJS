function validacao(){
    const A = true;
    const B = true;
    const C = false;

    
    const a = (A && B) || (A ^ B);
        console.log("Resultado de (A e B) ou (A xou B):", a);

    
    const b = (A || B) && (A && C);
        console.log("Resultado de (A ou B) e (A e C):", b);

    
    const c = A || (C && B) ^ (A && !B);
        console.log("Resultado de (A ou C) e (B ou A) e (não B):", c);

}