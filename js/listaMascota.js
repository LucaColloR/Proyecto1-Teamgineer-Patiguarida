'use strict'

const tabla = document.querySelector('#tbl-mascotas tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaInfoMascotas.forEach(mascotas => {
        if (mascotas.nombre.toLowerCase().includes(filtro) || mascotas.contacto.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = mascotas.nombre;
            fila.insertCell().innerHTML = mascotas.contacto;
            fila.insertCell().innerHTML = mascotas.tipo;
            fila.insertCell().innerHTML = mascotas.edad;
            fila.insertCell().innerHTML = mascotas.raza;
            fila.insertCell().innerHTML = mascotas.padecimientos;
            fila.insertCell().innerHTML = mascotas.vacunas;

            let celdaAcciones = fila.insertCell();

            let btnEditar = document.createElement('a');
            btnEditar.href = '#';
            btnEditar.classList.add('btnEditar');
            btnEditar.classList.add('fas');
            btnEditar.classList.add('fa-edit');

            btnEditar.addEventListener('click', editarMascota);
            //sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
            //window.location.href = 'usuario-modificar.html';

            celdaAcciones.appendChild(btnEditar);

            let btnBorrar = document.createElement('a');
            btnBorrar.href = '#';
            btnBorrar.classList.add('btnBorrar');
            btnBorrar.classList.add('fas');
            btnBorrar.classList.add('fa-trash-alt');

            btnBorrar.addEventListener('click', borrarMascota);

            celdaAcciones.appendChild(btnBorrar);

        }
    });
};

function editarMascota() {
    Swal.fire({
        title: 'Usuario aceptado',
        icon: 'success'
    })
}

function borrarMascota() {
    Swal.fire({
        'icon': 'warning',
        'text': 'Está seguro de borrar?',
        'showCancelButton': true,
        'confirmButtonText': 'Sí!, estoy seguro',
        'cancelButtonText': 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '',
                'El usuario ha sido eliminado',
                'success'
            )
        }
    })
}

mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);