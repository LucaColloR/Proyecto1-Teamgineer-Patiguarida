'use strict'

const tabla = document.querySelector('#tbl-proveedores tbody');
const inputFiltro = document.querySelector('#txt-filtro');



const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaProveedores.forEach(proveedores => {
        if (proveedores.nombre.toLowerCase().includes(filtro) || proveedores.correo.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = proveedores.nombre;
            fila.insertCell().innerHTML = proveedores.tel;
            fila.insertCell().innerHTML = proveedores.id;
            fila.insertCell().innerHTML = proveedores.cedula;
            fila.insertCell().innerHTML = proveedores.correo;
            fila.insertCell().innerHTML = proveedores.sexo;
            fila.insertCell().innerHTML = proveedores.tipo;
            fila.insertCell().innerHTML = proveedores.direccion;
            fila.insertCell().innerHTML = proveedores.fecha;

            let celdaAcciones = fila.insertCell();

            let btnEditar = document.createElement('a');
            btnEditar.href = '#';
            btnEditar.classList.add('btnEditar');
            btnEditar.classList.add('fas');
            btnEditar.classList.add('fa-edit');

            btnEditar.addEventListener('click', editarProveedores);
            //sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
            //window.location.href = 'usuario-modificar.html';

            celdaAcciones.appendChild(btnEditar);

            let btnBorrar = document.createElement('a');
            btnBorrar.href = '#';
            btnBorrar.classList.add('btnBorrar');
            btnBorrar.classList.add('fas');
            btnBorrar.classList.add('fa-trash-alt');

            btnBorrar.addEventListener('click', borrarProveedores);

            celdaAcciones.appendChild(btnBorrar);



        }
    })

};

function editarProveedores() {
    Swal.fire({
        title: 'Usuario aceptado',
        icon: 'success'
    })
}

function borrarProveedores() {
    Swal.fire({
        'icon': 'warning',
        'text': 'Está seguro de borrar el usuario proveedor?',
        'showCancelButton': true,
        'confirmButtonText': 'Sí!, estoy seguro',
        'cancelButtonText': 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '',
                'El usuario proveedor ha sido eliminado',
                'success'
            )
        }
    })
}

mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);