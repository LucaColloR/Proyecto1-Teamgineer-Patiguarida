'use strict'

const tabla = document.querySelector('#tbl-padecimientos-gato tbody');

const mostrarTabla = () => {
    listaPadecimientoGato.forEach(mascotas => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = mascotas.padecimiento;

        let celdaAcciones = fila.insertCell();

        let btnAgregar = document.createElement('a');
        btnAgregar.href = '#';
        btnAgregar.classList.add('btnAgregar');
        btnAgregar.classList.add('fas');
        btnAgregar.classList.add('fa-plus-square');

        btnAgregar.addEventListener('click', agregarPadecimientosGato);

        celdaAcciones.appendChild(btnAgregar);
        //sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
        //window.location.href = 'usuario-modificar.html';

        let btnBorrar = document.createElement('a');
        btnBorrar.href = '#';
        btnBorrar.classList.add('btnBorrar');
        btnBorrar.classList.add('fas');
        btnBorrar.classList.add('fa-trash-alt');

        btnBorrar.addEventListener('click', borrarPadecimientosGato);

        celdaAcciones.appendChild(btnBorrar);

    });
};

function agregarPadecimientosGato() {
    Swal.fire({
        title: 'Usuario aceptado',
        icon: 'success'
    })
}

function borrarPadecimientosGato() {
    Swal.fire({
        'icon': 'warning',
        'text': 'Está seguro de borrar el padecimiento?',
        'showCancelButton': true,
        'confirmButtonText': 'Sí!, estoy seguro',
        'cancelButtonText': 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '',
                'El padecimiento ha sido eliminado',
                'success'
            )
        }
    })
}
mostrarTabla();