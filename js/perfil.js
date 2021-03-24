'use strict';
const fotoUsuario = document.querySelector('.foto');
const nombreUsuario = document.querySelector('#nombre-cliente');
const correoUsuario = document.querySelector('#correo-cliente');
const numeroUsuario = document.querySelector('#numero-cliente');
const identificacionUsuario = document.querySelector('#identificacion-cliente');
const tipoIdentificacionUsuario = document.querySelector('#tipoID-cliente');
const generoUsuario = document.querySelector('#genero-cliente');
const direccionUsuario = document.querySelector('#direccion-cliente');


nombreUsuario.innerText = usuario.nombre;
correoUsuario.innerText = usuario.correo;
numeroUsuario.innerText = usuario.numero;
identificacionUsuario.innerText = usuario.identificacionNumero;
tipoIdentificacionUsuario.innerText = usuario.identificacionTipo;
direccionUsuario.innerText = usuario.direccion;
generoUsuario.innerText = usuario.genero;
fotoUsuario.src = usuario.foto;