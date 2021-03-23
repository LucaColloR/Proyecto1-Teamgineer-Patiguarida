'use strict'

const btnCrearCuenta = document.querySelector('#btn-crear');
const inputNombre = document.querySelector('#txt-nombre');
const inputPrecio = document.querySelector('#txt-precio');
const inputDescripcion = document.querySelector('#txt-descripcion');
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
    let numero = /^\d*$/;
    let nombre = /[a-z]/;


    if ((nombre.test(inputNombre.value) == false)) {
        error = true;
        inputNombre.classList.add('error');
    } else {
        inputNombre.classList.remove('error');
    }
    if ((numero.test(inputPrecio.value) == false) || (inputPrecio.value == '')) {
        error = true;
        inputPrecio.classList.add('error');
    } else {
        inputPrecio.classList.remove('error');
    }
    if ((nombre.test(inputDescripcion.value) == '')) {
        error = true;
        inputDescripcion.classList.add('error');
    } else {
        inputDescripcion.classList.remove('error');
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
        'text': 'Por favor espere hasta la aprobación de su cuenta. Esta se enviará a su correo electrónico',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'index.html';
    });
};

btnCrearCuenta.addEventListener('click', validar);