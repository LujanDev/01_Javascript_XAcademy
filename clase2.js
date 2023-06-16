function saludarSegunMomentoDelDia(momentoDelDia){
    if(momentoDelDia=='mañana'){
        console.log("Buenos días");
    }if(momentoDelDia=='tarde'){
        console.log('Buenas tardes');
    }else{
        console.log('Buenas noches');
    }
}
//saludarSegunMomentoDelDia('tarde');
//saludarSegunMomentoDelDia('mañana','tarde');
function sumar(numero1,numero2){
    return numero1+numero2;
}
let resultadoSuma1=sumar(33,55);
console.log(resultadoSuma1);