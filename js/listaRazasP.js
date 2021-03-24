'use strict'

const tablaP = document.querySelector('#tbl-razas-perro tbody');

const mostrarTablaP = () => {
    listaRazaPerro.forEach(mascotas => {
        let fila = tablaP.insertRow();
        fila.insertCell().innerHTML = mascotas.raza;

        let celdaAcciones = fila.insertCell();

        let btnAgregar = document.createElement('a');
        btnAgregar.href = '#';
        btnAgregar.classList.add('btnAgregar');
        btnAgregar.classList.add('fas');
        btnAgregar.classList.add('fa-plus-square');

        btnAgregar.addEventListener('click', agregarRazaPerro);

        celdaAcciones.appendChild(btnAgregar);
        //sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
        //window.location.href = 'usuario-modificar.html';

        let btnBorrar = document.createElement('a');
        btnBorrar.href = '#';
        btnBorrar.classList.add('btnBorrar');
        btnBorrar.classList.add('fas');
        btnBorrar.classList.add('fa-trash-alt');

        btnBorrar.addEventListener('click', borrarRazaPerro);

        celdaAcciones.appendChild(btnBorrar);

    });
};

function agregarRazaPerro() {
    Swal.fire({
        title: 'Usuario aceptado',
        icon: 'success'
    })
}

function borrarRazaPerro() {
    Swal.fire({
        'icon': 'warning',
        'text': 'Está seguro de borrar la raza?',
        'showCancelButton': true,
        'confirmButtonText': 'Sí!, estoy seguro',
        'cancelButtonText': 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '',
                'La raza ha sido eliminada correctamente',
                'success'
            )
        }
    })
}

mostrarTablaP();