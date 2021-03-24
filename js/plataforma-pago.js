//* constantes de la tarjeta
const inputCorreo = document.querySelector('#txt-correo');
const tarjeta = document.querySelector('#tarjeta'),
    formulario = document.querySelector('#formulario-tarjeta'),
    numeroTarjeta = document.querySelector('#tarjeta .numero'),
    nombreTarjeta = document.querySelector('#tarjeta .nombre'),
    logoMarca = document.querySelector('#logo-marca'),
    mesExpiracion = document.querySelector('#tarjeta .mes'),
    yearExpiracion = document.querySelector('#tarjeta .year');

//constantes de la direccion de facturación 
const selectMes = document.querySelector('#slt-mes');
const selectAnno = document.querySelector('#slt-anno');
const inputCvv = document.querySelector('#txt-cvv');
const inputNombreP = document.querySelector('#txt-nombre');
const inputApellido = document.querySelector('#txt-apellido');
const inpuDireccion = document.querySelector('#txt-direccion');
const inputCodigoP = document.querySelector('#txt-codigoPostal');
const btnConfirmarPago = document.querySelector('#btn-confirmarPago');

//constantes de la factura
const logoServicio = document.querySelector('#logo-servicio'),
    inputNomServicio = document.querySelector('#nombreServicio'),
    factura = document.querySelector('#factura'),
    inputDescripServicio = document.querySelector('#txt-DescripcionServicio'),
    inputPrecioServicio = document.querySelector('#txt-precio');
let servicioSeleccionado;



let error = false;
let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;
let numero = /^\d*$/;
let nombre = /[a-z]/;
let cvv = /^[0-9]{3,4}$/;
let visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
let masterCard = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
let americanExpress = /^3[47][0-9]{13}$/;

// * Mostrando  el frente.
const mostrarFrente = () => {
        if (tarjeta.classList.contains('active')) {
            tarjeta.classList.remove('active');
        }
    }
    // Función para mostrar imagen del servicio
inputNomServicio.value == 'peluquería';
const imagenFactura = () => {
    let error = false;

    /*  if (inputNomServicio.value == '') {
          logoServicio.innerHTML = 'no estoy';
      }*/
    if (inputNomServicio.value == 'peluquería') {
        error = false;
        logoServicio.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/esteticaCanina-servicio.jpg';
        logoServicio.appendChild(imagen);
    }
    mostrarFrente();
};
// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

// * Select del mes generado dinamicamente.
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

// * Select del año generado 
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

//* validacion de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
        .replace(/\D/g, '')
        .replace(/\s/g, '');
    numeroTarjeta.textContent = valorInput;

    if (valorInput == '') {
        numeroTarjeta.textContent = '#### #### #### ####';
        logoMarca.innerHTML = '';
    }
    if (visa.test(inputNumero.value) == true) {
        error = false;
        logoMarca.innerHTML = '';
        numeroTarjeta.textContent = valorInput;
        const imagen = document.createElement('img');
        imagen.src = 'img/visa.png';
        logoMarca.appendChild(imagen);

    } else if (americanExpress.test(inputNumero.value) == true) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/americanExpress.jpg';
        logoMarca.appendChild(imagen);
    } else if (masterCard.test(inputNumero.value) == true) {
        error;
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/mastercard.png';
        logoMarca.appendChild(imagen);
    }
    mostrarFrente();
});
// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;

    if (valorInput == '') {
        nombreTarjeta.textContent = 'Juanita';
    }
    mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {

    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
});

// * validación de todos los campos requeridos /
const validar = () => {
    let inputsRequeridos = document.querySelectorAll('.relleno :required');
    if (formulario.selectYear.value == 'Año') {
        yearExpiracion.classList.add('error');
    } else {
        yearExpiracion.classList.remove('error');
    }
    if (formulario.selectMes.value == 'Mes') {
        mesExpiracion.classList.add('error');
    } else {
        mesExpiracion.classList.remove('error');
    }

    if (regexCorreo.test(inputCorreo.value) == false || inputCorreo.value == '') {
        error = true;
        inputCorreo.classList.add('error');
    } else {
        inputCorreo.classList.remove('error');
    }

    //---------------------------------------------------------------------------
    inputsRequeridos.forEach(input => {
        if ((masterCard.test(inputNumero.value) == false) && (americanExpress.test(inputNumero.value) == false) && (visa.test(inputNumero.value) == false)) {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    //---------------------------------------------------------------------------

    if (formulario.inputNombre.value == '' || nombre.test(nombreTarjeta.value) == false) {
        error = true;
        inputNombre.classList.add('error');
    } else {
        inputNombre.classList.remove('error');
    }
    if (inputCvv.value == '' || cvv.test(inputCvv.value) == false) {
        error = true;
        inputCvv.classList.add('error');
    } else {

        inputCvv.classList.remove('error');
    }
    if (inputNombreP.value == '' || nombre.test(inputNombre.value) == false) {
        error = true;
        inputNombreP.classList.add('error');
    } else {
        inputNombreP.classList.remove('error');
    }
    if (inputApellido.value == '' || nombre.test(inputApellido.value) == false) {
        error = true;
        inputApellido.classList.add('error');
    } else {
        inputApellido.classList.remove('error');
    }
    if (inputCodigoP.value == '' || numero.test(inputCodigoP.value) == false) {
        error = true;
        inputCodigoP.classList.add('error');
    } else {
        inputCodigoP.classList.remove('error');
    }
    if (inpuDireccion.value == '') {
        error = true;
        inpuDireccion.classList.add('error');
    } else {
        inpuDireccion.classList.remove('error');
    }


    //validaciones de formato

    if (error == false) {
        Swal.fire({
                'icon': 'success',
                'title': 'Pago realizado',
                'text': 'El pago se realizó exitosamente',
                'confirmButtonText': 'Entendido'
            })
            .then(() => {
                Swal.fire({
                    'title': '¿Desea seguir comprando?',
                    'showCancelButton': true,
                    'confirmButtonText': '¡Sí!, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '',
                            'Vamos',
                            'success'
                        )
                        window.location.href = 'servicios.html';
                    }
                })
            });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo realizar el pago',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};




//* validacion y generación de factura
const llenarFormulario = () => {
        inputNomServicio.value == 'peluquería';
        inputDescripServicio.value == 'Belleza';
        inputPrecioServicio.value == '15000';
        imagenFactura();
    }
    /*if (sessionStorage.getItem('servicioSeleccionado')) {
        servicioSeleccionado = JSON.parse(sessionStorage.getItem('servicioSeleccionado'));
        llenarFormulario();
    } else {
        Swal.fire({
                'icon': 'warning',
                'title': 'Atención',
                'text': 'Debe seleccionar primero un servicio'
            })
            .then(() => {
                window.location.href = 'servicios.html';
            });*/


btnConfirmarPago.addEventListener('click', (e) => {
    validar();
    imagenFactura();
});
llenarFormulario();