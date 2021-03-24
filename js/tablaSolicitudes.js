'use strict';

const tabla = document.querySelector('#tbl-solicitudes tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaSolicitudes.forEach(usuario => {
        if (usuario.nombre.toLowerCase().includes(filtro) || usuario.correo.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = usuario.nombre;
            fila.insertCell().innerHTML = usuario.correo;
            fila.insertCell().innerHTML = usuario.nacimiento;
            fila.insertCell().innerHTML = usuario.sexo;

            let celdaAcciones = fila.insertCell();

            let btnAceptar = document.createElement('a');
            btnAceptar.href = '#';
            btnAceptar.classList.add('btnAceptar');
            btnAceptar.classList.add('fas');
            btnAceptar.classList.add('fa-user-check');

            btnAceptar.addEventListener('click', aceptarUsuario);

            celdaAcciones.appendChild(btnAceptar);

            let btnRechazar = document.createElement('a');
            btnRechazar.href = '#';
            btnRechazar.classList.add('btnRechazar');
            btnRechazar.classList.add('fas');
            btnRechazar.classList.add('fa-user-times');

            btnRechazar.addEventListener('click', rechazarUsuario);

            celdaAcciones.appendChild(btnRechazar);
            //<i class="fas fa-user-times"></i>

        }
    })
};

function aceptarUsuario() {
    Swal.fire({
        title: 'Usuario aceptado',
        icon: 'success'
    })
}

function rechazarUsuario() {
    Swal.fire({
        title: 'Usuario rechazado',
        icon: 'success'
    })
}

mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);