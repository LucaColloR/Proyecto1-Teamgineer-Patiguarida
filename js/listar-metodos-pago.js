'use strict';

let listaTarjeta = [{
    'nombre': 'Amanda',
    'numero': '5258791099000012',
    'cvv': '120',
    'mes': '8',
    'anno': '2023',
    'usuario': 'Amanda Víquez'
}, {
    'nombre': 'José',
    'numero': '375987654321001',
    'cvv': '120',
    'mes': '10',
    'anno': '2027',
    'usuario': 'José Ramírez',
}];
const logoServicio = document.querySelector('#logo-servicio'),
    inputNomServicio = document.querySelector('#nombreServicio'),
    factura = document.querySelector('#factura'),
    inputDescripServicio = document.querySelector('#txt-DescripcionServicio'),
    inputPrecioServicio = document.querySelector('#txt-precio');
let servicioSeleccionado;
const tabla = document.querySelector('#tbl-tarjetas tbody');
let usuario;
/*if (sessionStorage.getItem('usuarioConectado')) {
    usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
} else {
    window.location.href = 'inicio-sesion.html';
}*/

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});
const mostrarTabla = () => {
    listaTarjeta.forEach(tarjeta => {

        let fila = tabla.insertRow();
        /* if (usuario.nombre == tarjeta.usuario) {*/
        fila.insertCell().innerHTML = tarjeta.nombre;
        fila.insertCell().innerHTML = tarjeta.numero;
        fila.insertCell().innerHTML = tarjeta.cvv;
        fila.insertCell().innerHTML = tarjeta.mes;
        fila.insertCell().innerHTML = tarjeta.anno;
        fila.insertCell().innerHTML = tarjeta.usuario;
        let celdaAcciones = fila.insertCell();
        let btnUsar = document.createElement('usa');
        btnUsar.href = '#';

        btnUsar.classList.add('far');
        btnUsar.classList.add('fa-check-circle');
        //btnUsar.innerText = 'Utilizar';
        btnUsar.type = 'button';
        btnUsar.addEventListener('click', () => {
            Swal.fire({
                'icon': 'success',
                'title': 'Pago realizado',
                'text': 'El pago se realizó exitosamente',
                'confirmButtonText': 'Entendido'
            })
        });

        let botonEliminar = document.createElement('eli');
        // botonEliminar.innerText = 'Eliminar';
        botonEliminar.href = '#';
        botonEliminar.classList.add('fas');
        botonEliminar.classList.add('fa-trash-alt');
        botonEliminar.type = 'button';
        botonEliminar.addEventListener('click', () => {
            Swal.fire({
                'icon': 'warning',
                'text': '¿Está seguro que desea borrar la tarjeta?',
                'showCancelButton': true,
                'confirmButtonText': '¡Sí!, estoy seguro',
                'cancelButtonColor': '#d33',
                'cancelButtonText': 'Cancelar',
                'reverseButtons': true
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        '',
                        'Tarjeta eliminada',
                        'success'
                    )
                    fila.classList.add('ocultar');
                    celdaAcciones.classList.add('ocultar');
                }
            })
        });

        // Agregarle los botones a la celda
        celdaAcciones.appendChild(btnUsar);
        celdaAcciones.appendChild(botonEliminar);
        //  }

    });

};


/*
const imagenFactura = () => {
    let error = false;

    if (inputNomServicio.value == '') {
        logoServicio.innerHTML = 'no estoy';
    }
    if (inputNomServicio.value == 'peluquería') {
        error = false;
        logoServicio.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/esteticaCanina-servicio.jpg';
        logoServicio.appendChild(imagen);
    }
};
const llenarFormulario = () => {
    inputNomServicio.value = servicioSeleccionado.nombre;
    inputDescripServicio.value = servicioSeleccionado.descripcion;
    inputPrecioServicio.value = servicioSeleccionado.precio;
    imagenFactura();
}
if (sessionStorage.getItem('servicioSeleccionado')) {
    servicioSeleccionado = JSON.parse(sessionStorage.getItem('servicioSeleccionado'));
    llenarFormulario();
}*/
/* else {
    Swal.fire({
            'icon': 'warning',
            'title': 'Atención',
            'text': 'Debe seleccionar primero un usuario'
        })
        .then(() => {
            window.location.href = 'servicios.html';
        });
}*/



mostrarTabla();