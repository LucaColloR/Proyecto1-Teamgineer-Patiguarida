'use strict';
const btnRecuperar = document.querySelector('#btn-Recuperar');

const generarContrasenna = () => {
    var contrasena = "";
    num = "0123456789";
    characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    simbolos = '!¿¡-*$%&#';
    contrasena += String.fromCharCode((Math.floor((Math.random() * 100)) % 94) + 33);
    console.log(contrasena);

};
btnCrearCuenta.addEventListener('click', generarContrasenna);
