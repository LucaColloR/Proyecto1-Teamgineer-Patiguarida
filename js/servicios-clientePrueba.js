'use strict'
let listaUsuarios = [{
        'correo': 'andres@hotmail.com',
        'nombre': 'Andres Ledezma',
        'genero': 'Masculino',
        'identificacionNumero': '1160795',
        'identificacionTipo': 'Jurídica',
        'direccion': 'San José, Moravia, La Trinidad',
        'contrasenna': '1',
        'numero': '83032348',
        'foto': 'https://aws.glamour.es/prod/designs/v1/assets/620x620/678203.jpg',
        'tipo': 'Administrador'
    },
    {
        'correo': 'cliente@hotmail.com',
        'nombre': 'Pedro Perez',
        'genero': 'Masculino',
        'identificacionNumero': '1-5345-6765',
        'identificacionTipo': 'Fisica',
        'direccion': 'San Jose, Moravia, La Trinidad',
        'contrasenna': '21',
        'numero': '89543467',
        'tipo': 'Cliente'
    }
];

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
            window.location.href = 'perfil-cliente.html';
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