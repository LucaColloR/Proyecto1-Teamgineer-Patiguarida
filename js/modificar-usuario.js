'use scrict';
let usuarioSeleccionado;
const inputNombre = document.querySelector('#txt-nombre');
const inputTelefono = document.querySelector('#txt-telefono');
const inputIdentificacion = document.querySelector('#txt-identificacion');
const selectIdentificacionTipo = document.querySelector('#txt-identificacion-tipo');
const inputCorreo = document.querySelector('#txt-correo');
const selectSexo = document.querySelector('#slt-sexo');
const inputDireccion = document.querySelector('#txt-direccion');
const selectProvincia = document.querySelector('#txt-provincia');
const selectCanton = document.querySelector('#txt-canton');
const selectDistrito = document.querySelector('#txt-distrito');
const inputNacimiento = document.querySelector('#txt-nacimiento');
const btnGuardar = document.querySelector('#btn-guardar');

inputCorreo.disabled = true;

const llenarFormulario = () => {

    //Inicio formateo de la fecha
    let fecha = new Date(usuarioSeleccionado.nacimiento);

    let anno = fecha.getFullYear();
    let mes = fecha.getUTCMonth() + 1;
    let dia = fecha.getUTCDate();

    if (mes < 10) {
        mes = '0' + mes;

    }

    if (mes < 10) {
        mes = '0' + dia;

    }

    //Fin formateo de la fecha

    inputNacimiento.value = `${anno}-${mes}-${dia}`;


};

//validaciones de formato

const validar = () => {
    let error = false;

    let numero = /^\d*$/;
    let nombre = /[a-z]/;



    if ((nombre.test(inputNombre.value) == false)) {
        error = true;
        inputNombre.classList.add('error');
    } else {
        inputNombre.classList.remove('error');
    }
    if ((numero.test(inputTelefono.value) == false) || (inputTelefono.value == '')) {
        error = true;
        inputTelefono.classList.add('error');
    } else {
        inputTelefono.classList.remove('error');
    }
    if ((numero.test(inputIdentificacion.value) == false) || (inputIdentificacion.value == '')) {
        error = true;
        inputIdentificacion.classList.add('error');
    } else {
        inputIdentificacion.classList.remove('error');
    }

    if (selectSexo.value == '') {
        error = true;
        selectSexo.classList.add('error');
    } else {
        selectSexo.classList.remove('error');
    }

    if (selectIdentificacionTipo.value == '') {
        error = true;
        selectIdentificacionTipo.classList.add('error');
    } else {
        selectIdentificacionTipo.classList.remove('error');
    }
    if (selectProvincia.value == '') {
        error = true;
        selectProvincia.classList.add('error');
    } else {
        selectProvincia.classList.remove('error');

    }
    if (selectCanton.value == '') {
        error = true;
        selectCanton.classList.add('error');
    } else {
        selectCanton.classList.remove('error');
    }
    if (selectDistrito.value == '') {
        error = true;
        selectDistrito.classList.add('error');
    } else {
        selectDistrito.classList.remove('error');
    }

    if (error == false) {
        imprimir();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se ha podido modificar la cuenta',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }

};

const imprimir = () => {

    Swal.fire({
        'icon': 'success',
        'title': 'Su cuenta se ha modificado con éxito',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'perfil-cliente.html';
    });
};


btnGuardar.addEventListener('click', validar);



/************************* */