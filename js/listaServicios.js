'use strict';

const tabla = document.querySelector('#tbl-servicios tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaServicios.forEach((servicios) => {
        if (
            servicios.nombre.toLowerCase().includes(filtro) ||
            servicios.servicio.toLowerCase().includes(filtro) ||
            servicios.estado.toLowerCase().includes(filtro)
        ) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = servicios.nombre;
            fila.insertCell().innerHTML = servicios.cantidad;
            fila.insertCell().innerHTML = servicios.precio;
            fila.insertCell().innerHTML = servicios.servicio;

            // Guarda la celda con el estado para luego ser enviada a otra función
            let estado = fila.insertCell();
            estado.innerHTML = servicios.estado;

            let celdaAcciones = fila.insertCell();

            let btnAceptar = document.createElement('a');
            btnAceptar.href = '#';
            btnAceptar.classList.add('btnAceptar');
            btnAceptar.classList.add('fas');
            btnAceptar.classList.add('fa-check-circle');

            // En lugar de llamar directamente a la función, crea una función anónima que envía como parámetro la celda con el estado.
            btnAceptar.addEventListener('click', function() {
                aceptarServicio(estado);
            });

            celdaAcciones.appendChild(btnAceptar);

            let btnRechazar = document.createElement('b');
            btnRechazar.href = '#';
            btnRechazar.classList.add('btnRechazar');
            btnRechazar.classList.add('fas');
            btnRechazar.classList.add('fa-ban');

            btnRechazar.addEventListener('click', function() {
                rechazarServicio(estado);
            });
            celdaAcciones.appendChild(btnRechazar);
        }
    });
};

// Recibe la celda con el estado
function aceptarServicio(estado) {
    Swal.fire({
        title: 'Servicio aceptado',
        icon: 'success',
    });

    // Cambia el texto de la celda 
    estado.innerHTML = 'Aprobado';
}

function rechazarServicio(estado) {
    Swal.fire({
        icon: 'warning',
        text: '¿Estás seguro que deseas rechazar el servicio?',
        showCancelButton: true,
        confirmButtonText: '¡Sí!, estoy seguro',
        cancelButtonText: 'Cancel',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('', 'El servicio ha sido rechazado', 'success');
        }
        estado.innerHTML = 'Rechazado';
    });

}

mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);