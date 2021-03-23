'use strict';
let listaServicios = [{
    'nombre': 'Paseo-Perro',
    'precio': '₡5000',
    'proveedor': 'Nuria Hernández Salas',
    'telefono': '86452349',
    'descripcion': 'Paseo perros en Moravia',

}, {
    'nombre': 'Veterinaria a domicilio',
    'precio': '13000',
    'proveedor': 'Maria Jimena Jiménez Salazar',
    'telefono': '88689547',
    'descripcion': 'Emergencias medicas a domicilio por la zona de tibas',

}, {
    'nombre': 'Cuidador de perros y gatos',
    'precio': '₡5000',
    'proveedor': 'Carlos Gutiérrez Hernández Chavez',
    'telefono': '86695432',
    'descripcion': 'Cuido perros y gatos a domicilio',


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