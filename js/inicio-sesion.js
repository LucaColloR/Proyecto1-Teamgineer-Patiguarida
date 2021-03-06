'use strict';
let listaUsuarios = [{
        'correo': 'admin@admin.com',
        'nombre': 'Saúl López Obregon',
        'nacimiento': '09-20-1973',
        'genero': 'Masculino',
        'contrasenna': '123Abc!',
        'tipo': 'Administrador'
    }, {
        'correo': 'nuria@gmail.com',
        'nombre': 'Nuria Hernández Salas',
        'nacimiento': '11-04-1993',
        'genero': 'Femenino',
        'identificacionNumero': '116079581',
        'identificacionTipo': 'Jurídica',
        'direccion': 'San José, Moravia, La Trinidad',
        'numero': '84856217',
        'foto': 'https://aws.glamour.es/prod/designs/v1/assets/620x620/678203.jpg',
        'contrasenna': '123Abc!',
        'tipo': 'Proveedor'
    },
    {
        'correo': 'allan@gmail.com',
        'nombre': 'Allan Campos Perez',
        'nacimiento': '17-04-1984',
        'genero': 'Masculino',
        'identificacionNumero': '117560049',
        'identificacionTipo': 'Física',
        'direccion': 'San José, Moravia, La Trinidad',
        'numero': '83032348',
        'foto': 'https://aws.glamour.es/prod/designs/v1/assets/620x620/678203.jpg',
        'contrasenna': '123Abc!',
        'tipo': 'Cliente'
    },
    {
        'correo': 'jose@gmail.com',
        'nombre': 'José Ramírez Ureña',
        'nacimiento': '03-11-1990',
        'genero': 'Masculino',
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