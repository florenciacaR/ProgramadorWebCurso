
/*Ejercicio 2
Haciendo uso de los bucles, recorrer un array de números y determinar cual es el mayor */


const num =[100, 0, 2000, 500, 354770, 1000];
let cont=0;
let numMayor=0; 

while (num.length > cont){
    
    if(numMayor === 0){
        
        numMayor= num[0];

    }else if (numMayor < num[cont]){
        
        numMayor= num[cont];
    }

    cont ++;

}

 console.log(` el numero mayor del array es ${numMayor}` );
 
 