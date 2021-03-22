'use strict'

const btnCrearCuenta = document.querySelector('#btn-crear');
const inputCorreo = document.querySelector('#txt-correo');
const inputNombre = document.querySelector('#txt-nombre');
const selectSexo = document.querySelector('#slt-genero');
const selectipoID = document.querySelector('#slt-tipoID');
const inputNumero = document.querySelector('#txt-numero');
const inputCedula = document.querySelector('#txt-cedula');
const selectProvincia = document.querySelector('#slt-Provincia');
const selectCanton = document.querySelector('#slt-Canton');
const selectDistrito = document.querySelector('#slt-Distrito');

selectCanton.disabled = true;
selectDistrito.disabled = true;


const activar = () => {

    if (selectProvincia.value == '') {
        selectCanton.disabled = true;

    } else {
        selectCanton.disabled = false;
    }
    if (selectCanton.value == '') {
        selectDistrito.disabled = true;

    } else {
        selectDistrito.disabled = false;
    }

};

addEventListener('change', activar);

const validar = () => {
    let error = false;

    let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;
    let numero = /^\d*$/;
    let nombre = /[a-z]/;


    if (regexCorreo.test(inputCorreo.value) == false) {
        error = true;
        inputCorreo.classList.add('error');
    } else {
        inputCorreo.classList.remove('error');
    }

    if ((nombre.test(inputNombre.value) == false)) {
        error = true;
        inputNombre.classList.add('error');
    } else {
        inputNombre.classList.remove('error');
    }
    if ((numero.test(inputNumero.value) == false) || (inputNumero.value == '')) {
        error = true;
        inputNumero.classList.add('error');
    } else {
        inputNumero.classList.remove('error');
    }
    if ((numero.test(inputCedula.value) == false) || (inputCedula.value == '')) {
        error = true;
        inputCedula.classList.add('error');
    } else {
        inputCedula.classList.remove('error');
    }

    if (selectSexo.value == '') {
        error = true;
        selectSexo.classList.add('error');
    } else {
        selectSexo.classList.remove('error');
    }

    if (selectipoID.value == '') {
        error = true;
        selectipoID.classList.add('error');
    } else {
        selectipoID.classList.remove('error');
    }
    if (selectProvincia.value == '') {
        //selectCanton.disabled = true;
        error = true;
        selectProvincia.classList.add('error');

    } else {
        selectProvincia.classList.remove('error');
        //selectCanton.disabled = false;
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
            'title': 'No se pudo registrar la cuenta',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }

};

const imprimir = () => {

    Swal.fire({
        'icon': 'success',
        'title': 'Su cuenta se registro con éxito',
        'text': 'Por favor revise su correo electrónico',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'registro-mascota.html';
    });
};

btnCrearCuenta.addEventListener('click', validar);