'use strict'

const tabla = document.querySelector('#tbl-tipo-servicios tbody');

const mostrarTabla = () => {

    listaTipoServicio.forEach(mascotas => {

        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = mascotas.servicio;

        let celdaAcciones = fila.insertCell();

        let btnAgregar = document.createElement('a');
        btnAgregar.href = '#';
        btnAgregar.classList.add('btnAgregar');
        btnAgregar.classList.add('fas');
        btnAgregar.classList.add('fa-plus-square');

        btnAgregar.addEventListener('click', agregarTipoServicio);

        celdaAcciones.appendChild(btnAgregar);
        //sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
        //window.location.href = 'usuario-modificar.html';

        let btnBorrar = document.createElement('a');
        btnBorrar.href = '#';
        btnBorrar.classList.add('btnBorrar');
        btnBorrar.classList.add('fas');
        btnBorrar.classList.add('fa-trash-alt');

        btnBorrar.addEventListener('click', borrarTiposervicio);

        celdaAcciones.appendChild(btnBorrar);

    });

};

function agregarTipoServicio() {
    Swal.fire({
        title: 'Usuario aceptado',
        icon: 'success'
    })
}

function borrarTiposervicio() {
    Swal.fire({
        'icon': 'warning',
        'text': 'Está seguro de borrar el tipo de servicio?',
        'showCancelButton': true,
        'confirmButtonText': 'Sí!, estoy seguro',
        'cancelButtonText': 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '',
                'El tipo de servicio ha sido eliminado',
                'success'
            )
        }
    })
}
mostrarTabla();