'use strict';
let listaUsuarios = [{
        'correo': 'admin@admin.com',
        'nombre': 'Raúl Pérez',
        'nacimiento': '09-20-1973',
        'sexo': 'Masculino',
        'contrasenna': '123Abc!',
        'tipo': 'Administrador'
    }, {
        'correo': 'amanda@gmail.com',
        'nombre': 'Amanda Víquez',
        'nacimiento': '03-11-1991',
        'sexo': 'Femenino',
        'contrasenna': '123Abc!',
        'tipo': 'Proveedor'
    },
    {
        'correo': 'pablo@gmail.com',
        'nombre': 'Pablo Monestel',
        'nacimiento': '10-12-1987',
        'sexo': 'Masculino',
        'contrasenna': '123Abc!',
        'tipo': 'Cliente'
    },
    {
        'correo': 'jose@gmail.com',
        'nombre': 'José Ramírez',
        'nacimiento': '03-11-1990',
        'sexo': 'Masculino',
        'contrasenna': '123Abc!',
        'tipo': 'Cliente'
    }
];
const inputCorreo = document.querySelector('#txt-correo');
const inputContrasenna = document.querySelector('#txt-contrasenna');
const btnIniciar = document.querySelector('#btn-iniciar');
const selectTipoU = document.querySelector('#slt-tipoRegistro')
var x = document.getElementById("hands");
var y = document.getElementById("animcon");



function closeye() {
    y.style.backgroundImage = "url('img/cat2.gif')";
    x.style.marginTop = "0%";
}

function openeye() {
    y.style.backgroundImage = "url('img/cat2.gif')";
    x.style.marginTop = "110%";
}
const validar = () => {
    let error = false;

    let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;

    if (regexCorreo.test(inputCorreo.value) == false) {
        error = true;
        inputCorreo.classList.add('error');
    } else {
        inputCorreo.classList.remove('error');
    }

    if (inputContrasenna.value == '') {
        error = true;
        inputContrasenna.classList.add('error');
    } else {
        inputContrasenna.classList.remove('error');
    }
    if (error == false) {
        iniciarSesion(inputCorreo.value, inputContrasenna.value);

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo iniciar sesión',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }

};
const iniciarSesion = (correo, contrasenna) => {
    let credencialesCorrectas = false;
    listaUsuarios.forEach(usuario => {
        if (usuario.correo == correo) {
            if (usuario.contrasenna == contrasenna) {
                credencialesCorrectas = true;
                /* para guardar informacion */
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
            /*cambiar a la pagina correcto */
            window.location.replace("index-usuario.html");
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
//Colocar las paginas de registro de Cliente y registro de proveedor.
const registrar = () => {
    if (selectTipoU.value == 'Cliente') {
        window.location.replace("registro-cliente.html");

    } else if (selectTipoU.value == 'Proveedor') {
        window.location.replace("registro-proveedor.html");
    }
};

selectTipoU.addEventListener('change', registrar);
btnIniciar.addEventListener('click', validar);