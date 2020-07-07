"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Métodos: se llama métodos al comportamiento que puede tener una clase. Dicho de otra forma,
//son cachos de código que se pueden ejecutar. 
//Estos métodos son internos de la clase y, un método puede tener acceso al estado de su clase (a sus atributos).
var AR = /** @class */ (function () {
    function AR(name, baja) {
        this.ar = name;
        this.nu = baja;
    }
    return AR;
}());
var DAÑO = /** @class */ (function (_super) {
    __extends(DAÑO, _super);
    function DAÑO(name, baja) {
        return _super.call(this, name, baja) || this;
    }
    DAÑO.prototype.salida = function () {
        console.log("Arma: " + this.ar + " " + "Daño: " + this.nu);
    };
    return DAÑO;
}(AR));
var Arma = new DAÑO("M416", 41);
Arma.salida();
var Arma2 = new DAÑO("Groza", 43);
Arma2.salida();
var Coche = /** @class */ (function () {
    function Coche(velo) {
        this.velo = velo;
    }
    Coche.prototype.getVelo = function () {
        return this.velo;
    };
    Coche.prototype.setVelo = function (velo) {
        this.velo = velo;
    };
    return Coche;
}());
var coche = new Coche(125);
coche.velo;
console.log("La velocidad Maxima del Dasia es: " + coche.velo + " Km.");
//Funcion anonima
var funcSumar = function (valor1, valor2) {
    return valor1 + valor2;
};
//closure
console.log(funcSumar(4, 9));
function makeArmy() {
    var shooters = [];
    for (var i = 0; i < 10; i++) {
        var shooter = function () {
            alert(i);
        };
        shooters.push(shooter);
    }
    return shooters;
}
//No puse todos los puntos, bueno explique xD, pero si le agarre el rollo a cada cosa
//F!!!
