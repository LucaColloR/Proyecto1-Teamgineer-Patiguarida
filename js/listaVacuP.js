'use strict'

const tabla = document.querySelector('#tbl-vacunas-perro tbody');


const mostrarTabla = () => {
    listaVacunasPerro.forEach(mascotas => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = mascotas.vacuna;

        let celdaAcciones = fila.insertCell();

        let btnAgregar = document.createElement('a');
        btnAgregar.href = '#';
        btnAgregar.classList.add('btnAgregar');
        btnAgregar.classList.add('fas');
        btnAgregar.classList.add('fa-plus-square');

        btnAgregar.addEventListener('click', agregarVacunasPerro);

        celdaAcciones.appendChild(btnAgregar);
        //sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
        //window.location.href = 'usuario-modificar.html';

        let btnBorrar = document.createElement('a');
        btnBorrar.href = '#';
        btnBorrar.classList.add('btnBorrar');
        btnBorrar.classList.add('fas');
        btnBorrar.classList.add('fa-trash-alt');

        btnBorrar.addEventListener('click', borrarVacunasPerro);

        celdaAcciones.appendChild(btnBorrar);

    });
};

function agregarVacunasPerro() {
    Swal.fire({
        title: 'Usuario aceptado',
        icon: 'success'
    })
}

function borrarVacunasPerro() {
    Swal.fire({
        'icon': 'warning',
        'text': 'Está seguro de borrar la vacuna?',
        'showCancelButton': true,
        'confirmButtonText': 'Sí!, estoy seguro',
        'cancelButtonText': 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '',
                'La vacuna ha sido eliminada correctamente',
                'success'
            )
        }
    })
}
mostrarTabla();