
console.log('Aplicando Iteraciones');

let juego = parseInt(prompt('Selecciona una de las siguientes opciones: \n 1. JUEGO ADIVINA # SECRETO del 1 al 1000 \n 2. CONSULTA LA HORA EXACTA 5 VECES \n 3. SALIR DEL MENU'))
/* let depurar = isNaN(juego) */


while (juego <= 0 || juego > 3 || isNaN(juego)){
    alert('Debes seleccionar solo una opcion entre 1 y 3')
    juego =prompt('Selecciona una de las siguientes opciones: \n 1. JUEGO ADIVINA # SECRETO del 1 al 1000 \n 2. CONSULTA LA HORA EXACTA 5 VECES \n 3. SALIR DEL MENU')
}

switch (juego) {
    case 1:
        alert('Juego numero 1 Seleccionado: ADIVINA EL # SECRETO del 1 a 1000 \nEntre mas cerca estes del numero secreto, aumenta el nivel de dificultad')
        let numero = parseInt(prompt('Ingresa el numero secreto, recuerda que esta entre 1 y 1000'))
        const secreto = 570
        while (numero !== secreto ){
            if (numero/secreto < 1){
                alert('el numero que has ingresado es menor que el numero secreto')
                console.log(numero/secreto)
                if(numero/secreto<=0.3){
                    alert('estas muy por debajo, aumenta mas')
                }
                else if (numero/secreto<=0.5){
                    alert('no estas tan lejos pero aun falta, aumenta mas')
                }
                else if(numero/secreto<=0.7){
                    alert('estas mas cerca de lo que crees pero puedes mejorar, aumenta mas')
                }
                else if(numero/secreto<=0.9){
                    alert('ya casi, solo falta un poco, aumenta mas pero no te vayas a pasar')
                }
                else if(numero/secreto<=0.97){
                    alert('¿No sientes que te estas quemando?, aumenta un poquito mas, paciencia!!!')
                }
                else if(numero/secreto>=0.95){
                    alert('Creo que ya sabes cual es el numero XD, aumentele unos cuantos mas')
                }
                numero = parseInt(prompt('Ingresa el numero secreto, recuerda que esta entre 1 y 1000 \n Ultimo numero digitado fue: ' + numero ))
            }
            else{
                alert('el numero que has ingresado es mayor que el numero secreto')
                console.log(numero/secreto)
                if(numero/secreto<=1.03){
                    alert('Creo que ya sabes cual es el numero XD, restale unos cuantos mas')
                }
                else if(numero/secreto<=1.05){
                    alert('¿No sientes que te estas quemando?, restale un poquito mas, paciencia!!!')
                }                
                else if(numero/secreto<=1.1){
                    alert('ya casi, solo falta un poco, restale mas pero no te vayas a pasar')
                }
                else if(numero/secreto<=1.3){
                    alert('estas mas cerca de lo que crees pero puedes mejorar, restale mas')
                }
                else if(numero/secreto<1.5){
                    alert('no estas tan lejos pero aun falta, restale mas')
                }
                else if(numero/secreto>=1.5){
                    alert('estas muy por encima, restale mas')
                }
                numero = parseInt(prompt('Ingresa el numero secreto, recuerda que esta entre 1 y 1000 \n Ultimo numero digitado fue: ' + numero))
            }
        }
        alert('FELICITACIONES!! Has encontrado el numero secreto: ' + secreto)
        break

    case 2:
        alert('Juego numero 2 Seleccionado: CONSULTA LA HORA EXACTA 5 VECES')
        let h = new Date ()
        for (i=1;i<=5;i++){
            alert(`CONSULTA #${i} la hora exacta en Colombia es: ${h.getHours()}:${h.getMinutes()}:${h.getSeconds()} \n La hora del profesor en Mexico es:  ${h.getHours()-1}:${h.getMinutes()}:${h.getSeconds()}`)
            h=new Date()    
        } 
        break

    case 3:
        alert('Gracias por utilizar nuetra app "FSG" todos los derechos reservados!! \n Esperamos que vuelvas pronto')
        break


}