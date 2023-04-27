/*Ejercicio 1

Utilizando lo aprendido escribir el código necesario para que dada una 
determine el medio de transporte apropiado de acuerdo a las siguientes
reglas:

0 a 1000 metros = pie
1000 a 10000 metros = bicicleta
10000 a 30000 metros = colectivo
30000 a 100000 metros = auto
+100000 = avión */ 

let distancia=prompt("indique la distancia: ") ;



if (distancia>=0 && distancia <=1000){

    prompt("pie") ;

  }else if(distancia<=10000){

    prompt("bicicleta") ;

  }else if( distancia<=30000){

    prompt("colectivo");

  }else if (distancia<=100000){

    prompt("auto");

  }else {

    prompt("avion");
  }