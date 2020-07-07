//Métodos: se llama métodos al comportamiento que puede tener una clase. Dicho de otra forma,
     //son cachos de código que se pueden ejecutar. 
     //Estos métodos son internos de la clase y, un método puede tener acceso al estado de su clase (a sus atributos).
     class AR{
      ar: string;
      nu: number;
      constructor(name: string, baja:number){
        this.ar = name;
        this.nu = baja;
      }
    
    }
      class DAÑO extends AR{ 
        constructor(name: string, baja:number){
          super(name, baja);
          
        }
        salida(){
          console.log("Arma: " + this.ar + " " + "Daño: " + this.nu);
        }
      }
      let Arma = new DAÑO("M416", 41);
      Arma.salida();
      let Arma2 = new DAÑO("Groza", 43);
      Arma2.salida();
     
      class Coche {
        public velo: number;
    constructor(velo: number){
    this.velo= velo;
    }
        public getVelo(){
          return this.velo;
        }
        public setVelo(velo: number){
          this.velo = velo;
    
        }
      }
      var coche = new Coche(125);
      coche.velo;
      console.log("La velocidad Maxima del Dasia es: " + coche.velo + " Km.");
      //Funcion anonima
      const funcSumar = function (valor1:number, valor2:number): number {
        return valor1 + valor2;
      }
      //closure
      console.log(funcSumar(4, 9));
      function makeArmy() {
        var shooters = []
        for(var i = 0; i < 10; i++) {
          var shooter = function() { 
            alert(i) 
          }
          shooters.push(shooter)    
        }
        return shooters;
      }
      //No puse todos los puntos, bueno explique xD, pero si le agarre el rollo a cada cosa
      //F!!!