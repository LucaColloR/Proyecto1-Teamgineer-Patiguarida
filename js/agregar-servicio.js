'use scrict';
let usuarioSeleccionado;
const inputNombreVacuna = document.querySelector('#txt-nombre-vacuna');
const selectTipoMascota = document.querySelector('#slt-tipo-mascota');
const btnGuardar = document.querySelector('#btn-guardar');


const llenarFormulario = () => {



    //Fin formateo de la fecha
    inputNombreVacuna.value = usuarioSeleccionado.nombre;
    selectTipoMascota.value = usuarioSeleccionado.sexo;

};

const validar = () => {
    let error = false;
    let inputsRequeridos = document.querySelectorAll('.formulario :required');
    inputsRequeridos.forEach(input => {
        if (input.value == '') {
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
            'title': 'Vacuna agregada',
            'text': 'La información fue agregada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'administracion.html';
        });

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo agregar una vacuna',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
};



btnGuardar.addEventListener('click', validar);