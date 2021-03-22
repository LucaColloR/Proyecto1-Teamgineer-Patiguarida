'use strict';
let listaServicios = [{
    'nombre': 'Paseador de perro',
    'proveedor': 'Raúl Pérez',
    'telefono': '1234 5678',
    'descripcion': 'Paseo perros',
    'precio': '3000',


}, {
    'nombre': 'Veterinaria a domicilio',
    'proveedor': 'Maria Jimena Jiménez',
    'telefono': '8888 8888',
    'descripcion': 'Emergencias medicas',
    'precio': '13000',

}, {
    'nombre': 'Cuidador de perros y gatos',
    'proveedor': 'Carlos Gutiérrez Hernández',
    'telefono': '7777 7777',
    'descripcion': 'Cuido perros y gatos a domicilio',
    'precio': '5000',

}, ];


const iniciarSesion = (correo, contrasenna) => {
    let credencialesCorrectas = false;
    listaUsuarios.forEach(usuario => {
        if (usuario.correo == correo) {
            if (usuario.contrasenna == contrasenna) {
                credencialesCorrectas = true;
                sessionStorage.setItem('usuarioConectado', JSON.stringify(usuario));
            }
        }
    });

    if (credencialesCorrectas == true) {
        Swal.fire({
            'icon': 'success',
            'title': 'Bienvenido',
            'text': 'Ha iniciado sesión correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'dashboard.html';
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No ha podido iniciar sesión',
            'text': 'Usuario o contraseña incorrectos',
            'confirmButtonText': 'Entendido'
        });
    }
};