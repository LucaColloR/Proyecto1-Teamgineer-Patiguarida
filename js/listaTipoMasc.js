'use strict'

const tabla = document.querySelector('#tbl-tipo-mascotas tbody');

const mostrarTabla = () => {
    listaTipoMascotas.forEach(mascotas => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = mascotas.tipo;

        let celdaAcciones = fila.insertCell();

        let btnAgregar = document.createElement('a');
        btnAgregar.href = '#';
        btnAgregar.classList.add('btnAgregar');
        btnAgregar.classList.add('fas');
        btnAgregar.classList.add('fa-plus-square');

        btnAgregar.addEventListener('click', agregarTipoMascota);

        celdaAcciones.appendChild(btnAgregar);
        //sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
        //window.location.href = 'usuario-modificar.html';

        let btnBorrar = document.createElement('a');
        btnBorrar.href = '#';
        btnBorrar.classList.add('btnBorrar');
        btnBorrar.classList.add('fas');
        btnBorrar.classList.add('fa-trash-alt');

        btnBorrar.addEventListener('click', borrarTipoMascota);

        celdaAcciones.appendChild(btnBorrar);

    });
};

function agregarTipoMascota() {
    Swal.fire({
        title: 'Usuario aceptado',
        icon: 'success'
    })
}

function borrarTipoMascota() {
    Swal.fire({
        'icon': 'warning',
        'text': 'Está seguro de borrar el tipo de mascota?',
        'showCancelButton': true,
        'confirmButtonText': 'Sí!, estoy seguro',
        'cancelButtonText': 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '',
                'El tipo de mascota ha sido eliminado',
                'success'
            )
        }
    })
}

mostrarTabla();