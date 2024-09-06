//realiza una batalla naval
const prompt = require('prompt-sync')();
class barcos{
constructor ()
{
    this.destructor   =  3
    this.portaAviones =  5
    this.acorazado    = 4
    this.submarinos   =  2
}
};
class Jugadores extends barcos{
constructor (nombre){
super()
this.nombre =nombre
}
saludo(){
    console.log(`Bienvenido, ${this.nombre}`)
}
};
 // Función auxiliar para verificar si una posición está dentro del mapa y está libre
 function estaLibre(x, y) {
    return x >= 1 && x <= 10 && y >= 1 && y <= 10 && Mapa[x][y] === "//";
  }
  //Validacion de entrada
  function CorrectVales(X,Y)
  {
    if(typeof X===Number && Y === Number)
    {
          return false;
    }
    else{
        return true;
    }
  }


  function colocarBarco(x, y, direccion, barco,Mapa) {
    console.table(Mapa);
    if (estaLibre(x, y)&& CorrectVales(x,y)) {
     if (direccion === "horizontal") 
        {
            if(Mapa[x][y]==="//")
            {
               let Posible_Position=true;
               for (let i = 0; i < barco; i++)
                 {
                   if(Mapa[x][y+i]!=='//')
                   {
                    Posible_Position=false;
                  
                   }
                   
                 }
                 if(Posible_Position)
                 {
                    for (let i = 0; i < barco; i++)
                        {
                         Mapa[x][y+i] = "O";
                        }
                        return true;
                 } else{
                    console.log('Posicion invalida');
                    return false
                 }
            }
        }
        else
        {
            if(Mapa[x][y]==="//")
                {
                   let Posible_Position=true;
                   for (let i = 0; i <barco; i++)
                     {
                       if(Mapa[x+i][y]!=='//')
                       {
                        Posible_Position=false;
                       }
                     }
                     if(Posible_Position)
                     {
                        for (let i = 0; i < barco; i++)
                            {
                             Mapa[x][y+i] = "O";
                            }
                            return true
                     }
                     else{
                        console.log('Posicion invalida');
                        return false
                     }
                }
        }
    } else {
      return false;
    }
  }
 function Final(mapa)
 {
console.log("Ingrese coordenadas y direccion del destructor TAMANIO 3");
let X = prompt("Ingrese Coordenada X :");
let Y = prompt("Ingrese Coordenada Y :");
let Direccion = prompt("Ingrese Direccion escriba alguna de estas opciones(vertical,horizontal)  :");
colocarBarco(X,Y,Direccion,3,mapa);
console.table(mapa);

console.log("Ingrese coordenadas y direccion del PortaAviones TAMANIO 5");
X = prompt("Ingrese Coordenada X :");
Y = prompt("Ingrese Coordenada Y :");
Direccion = prompt("Ingrese Direccion escriba alguna de estas opciones(vertical,horizontal)  :");
colocarBarco(X,Y,Direccion,5,mapa);
console.table(mapa);

console.log("Ingrese coordenadas y direccion del Acorazado TAMANIO 4");
X = prompt("Ingrese Coordenada X :");
Y = prompt("Ingrese Coordenada Y :");
Direccion = prompt("Ingrese Direccion escriba alguna de estas opciones(vertical,horizontal)  :");
colocarBarco(X,Y,Direccion,4,mapa);
console.table(mapa);

console.log("Ingrese coordenadas y direccion del Submarino TAMANIO 2");
X = prompt("Ingrese Coordenada X :");
Y = prompt("Ingrese Coordenada Y :");
Direccion = prompt("Ingrese Direccion escriba alguna de estas opciones(vertical,horizontal)  :");
colocarBarco(X,Y,Direccion,2,mapa);
console.table(mapa);

 }
const player1 = prompt("Ingrese su nombre jugador 1");
const P1 = new Jugadores(player1);
P1.saludo();

const player2 = prompt("Ingrese su nombre jugador 2");
const P2 = new Jugadores(player2);
P2.saludo();



let MapaJugador1=[ 
     [0,  1 ,  2 ,  3 ,  4 ,  5 ,  6,   7,   8,   9,   10] 
    ,[1,'//','//','//','//','//','//','//','//','//','//']
    ,[2,'//','//','//','//','//','//','//','//','//','//']
    ,[3,'//','//','//','//','//','//','//','//','//','//']
    ,[4,'//','//','//','//','//','//','//','//','//','//']
    ,[5,'//','//','//','//','//','//','//','//','//','//']
    ,[6,'//','//','//','//','//','//','//','//','//','//']
    ,[7,'//','//','//','//','//','//','//','//','//','//']
    ,[8,'//','//','//','//','//','//','//','//','//','//']
    ,[9,'//','//','//','//','//','//','//','//','//','//']
    ,[10,'//','//','//','//','//','//','//','//','//','//']




]
let MapaJugador2=[ 
    [0,  1 ,  2 ,  3 ,  4 ,  5 ,  6,   7,   8,   9,   10] 
   ,[1,'//','//','//','//','//','//','//','//','//','//']
   ,[2,'//','//','//','//','//','//','//','//','//','//']
   ,[3,'//','//','//','//','//','//','//','//','//','//']
   ,[4,'//','//','//','//','//','//','//','//','//','//']
   ,[5,'//','//','//','//','//','//','//','//','//','//']
   ,[6,'//','//','//','//','//','//','//','//','//','//']
   ,[7,'//','//','//','//','//','//','//','//','//','//']
   ,[8,'//','//','//','//','//','//','//','//','//','//']
   ,[9,'//','//','//','//','//','//','//','//','//','//']
   ,[10,'//','//','//','//','//','//','//','//','//','//']




]
console.log('Posicione sus barcos jugador 1');
console.table(MapaJugador1);

Final(MapaJugador1);

console.log('Posicione sus barcos jugador 1');
console.table(MapaJugador2);
Final(MapaJugador2);

colocarBarco(X,Y,Direccion,barco)

