'use strict'

const tabla = document.querySelector('#tbl-dueños tbody');
const inputFiltro = document.querySelector('#txt-filtro');


const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaDueños.forEach(dueños => {
        if (dueños.nombre.toLowerCase().includes(filtro) || dueños.correo.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = dueños.nombre;
            fila.insertCell().innerHTML = dueños.cedula;
            fila.insertCell().innerHTML = dueños.correo;
            fila.insertCell().innerHTML = dueños.sexo;
            fila.insertCell().innerHTML = dueños.tipo;
            fila.insertCell().innerHTML = dueños.direccion;
            fila.insertCell().innerHTML = dueños.fecha;

            let celdaAcciones = fila.insertCell();

            let btnEditar = document.createElement('a');
            btnEditar.href = '#';
            btnEditar.classList.add('btnEditar');
            btnEditar.classList.add('fas');
            btnEditar.classList.add('fa-edit');

            btnEditar.addEventListener('click', editarDueños);
            //sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
            //window.location.href = 'usuario-modificar.html';

            celdaAcciones.appendChild(btnEditar);

            let btnBorrar = document.createElement('a');
            btnBorrar.href = '#';
            btnBorrar.classList.add('btnBorrar');
            btnBorrar.classList.add('fas');
            btnBorrar.classList.add('fa-trash-alt');

            btnBorrar.addEventListener('click', borrarDueños);

            celdaAcciones.appendChild(btnBorrar);

        }
    });
};

function editarDueños() {
    Swal.fire({
        title: 'Usuario aceptado',
        icon: 'success'
    })
}

function borrarDueños() {
    Swal.fire({
        'icon': 'warning',
        'text': 'Esta seguro de borrar el usuario dueño de mascota?',
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