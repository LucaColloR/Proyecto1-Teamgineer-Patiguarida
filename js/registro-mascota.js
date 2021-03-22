'use strict';

/* Declaración de arrays para llenar selects */
const arrayGato = ['Angora', 'Persa', 'Ruso Azul', 'Sin raza definida'];
const arrayPerro = ['Bulldog', 'Gran danés', 'Chihuahua', 'Sin raza definida'];
const arrayVacunaP = ['Múltiple Canina', 'Vacunas Tos de las perreras', 'Vacuna contra la rabia', 'Ninguna'];
const arrayVacunaG = ['Vacuna de Leucemia Felina', 'Vacunas Triple Felina', 'Vacuna contra la rabia', 'Ninguna'];
const arrayPadecimientoP = ['Moquillo', 'Hepatitis Canina', 'Leptospirosis', 'Parvovirus', 'Rabia', 'Brucelosis', 'Enfermedad de Lyme',
    'Tos de las perreras', 'Toxoplasmosis', 'Otitis', 'Conjuntivitis', 'Alergias cutáneas', 'Gastritis aguda', 'Diarrea',
    'Leishmaniosis', 'Sarna demodéctica', 'Mastitis', 'Torsión/dilatación', 'Cáncer', 'Insuficiencia renal crónica', 'Ninguna'
];
const arrayPadecimientoG = ['Mastitis', 'Diarrea', 'Hipertiroidismo', 'Diabetes Mellitus', 'Rabia', 'Infección por retrovirus', 'Cáncer en felinos', 'Ninguna'];


/* Declaración de constantes */
let tipo;
const opciones = document.querySelector('#slt-raza');
const inputNombreMasct = document.querySelector('#txt-nombreMascota');
const inputTelefono = document.querySelector('#txt-numero-duenno');
const selectTipo = document.querySelector('#slt-tipo');
const selectRaza = document.querySelector('#slt-raza');
const selectEdad = document.querySelector('#slt-edad');
const selectVacunas = document.querySelector('#slt-vacunas');
const selectPadecimientos = document.querySelector('#slt-padecimientos');
const textAreaCaracEspeciales = document.querySelector('#txtA-carac-especiales');
const btnRegistrarMasct = document.querySelector('#btn-registrarM');
const imagen = document.querySelector('#imagen');
/*--------------------------------------------------*/

const validar = () => {
    let error = false;
    let telefono = /^\d*$/;
    let nombre = /[a-z]/;
    let inputsRequeridos = document.querySelectorAll('.formulario :required');

    inputsRequeridos.forEach(input => {
        if (inputImg == "img/avatar-mascotas.jpg") {
            input.classList.add('error');
        }
        if (input.value == '' || (telefono.test(inputTelefono.value) == false) || (nombre.test(inputNombreMasct.value) == false)) {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    //validaciones de formato

    if (error == false) {
        Swal.fire({
            'icon': 'success',
            'title': 'Mascota registrada',
            'text': 'La mascota fue registrada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'usuarios.html';
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar la mascota',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};
/*---------------------------------------------------*/
const mostrarOpciones = () => {
    switch (selectTipo.value) {
        case 'Perro':
            llenarSelectRaza(selectRaza, arrayPerro);
            llenarSelectVacuna(selectVacunas, arrayVacunaP);
            llenarSelectPadecimientos(selectVacunas, arrayPadecimientoP);
            break;
        case 'Gato':
            llenarSelectRaza(selectRaza, arrayGato);
            llenarSelectVacuna(selectVacunas, arrayVacunaG);
            llenarSelectPadecimientos(selectVacunas, arrayPadecimientoG);
            break;

    }
};
/*---------------------------------------------------*/
/* llenarlo con el array de la base de datos */
const llenarSelectVacuna = (select, array) => {
        select.innerHTML = '';
        let option = document.createElement("option");
        option.value = '';
        option.innerHTML = 'seleccione la vacuna';
        select.appendChild(option);

        for (let index = 0; index < array.length; index++) {
            let element = array[index];
            let opt = document.createElement("option");
            opt.value = element;
            opt.innerHTML = element;
            select.appendChild(opt);
        }
    }
    /*---------------------------------------*/
const llenarSelectRaza = (select, array) => {
        select.innerHTML = '';
        let option = document.createElement("option");
        option.value = '';
        option.innerHTML = 'seleccione la raza';
        select.appendChild(option);

        for (let index = 0; index < array.length; index++) {
            let element = array[index];
            let opt = document.createElement("option");
            opt.value = element;
            opt.innerHTML = element;
            select.appendChild(opt);

        }
    }
    /*---------------------------------------*/
const llenarSelectPadecimientos = (select, array) => {
        select.innerHTML = '';
        let option = document.createElement("option");
        option.value = '';
        option.innerHTML = 'seleccione el padecimiento';
        select.appendChild(option);

        for (let index = 0; index < array.length; index++) {
            let element = array[index];
            let opt = document.createElement("option");
            opt.value = element;
            opt.innerHTML = element;
            select.appendChild(opt);

        }
    }
    /*-------------------------------------------*/

/*
para registrar de verdad, guardar.
const llenarFormulario = () => {

    inputNombreMasct.value = mascotaSeleccionada.nombre;
    inputTelefono.value = mascotaSeleccionada.telefono;
    selectTipo.value = mascotaSeleccionada.tipo;
    selectRaza.value = mascotaSeleccionada.raza;
    selectEdad.value = mascotaSeleccionada.edad;
    selectVacunas.value = mascotaSeleccionada.vacunas;
    selectPadecimientos.value = mascotaSeleccionada.padecimientos;
    textAreaCaracEspeciales.value = mascotaSeleccionada.caracteristicas;

};*/

selectTipo.addEventListener('change', mostrarOpciones);
btnRegistrarMasct.addEventListener('click', validar);