'use strict';

const tabla = document.querySelector('#tbl-servicios tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaServicios.forEach(servicio => { //Se crea una row por cada usuario
        if (servicio.nombre.toLowerCase().includes(filtro) || servicio.proveedor.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = servicio.nombre; //Se crea un cell por cada nombre de usuario
            fila.insertCell().innerHTML = servicio.precio; //Se crea un cell por cada tipo de usuario
            fila.insertCell().innerHTML = servicio.proveedor; //Se crea un cell por cada correo de usuario
            fila.insertCell().innerHTML = servicio.telefono; //Se crea un cell por cada nacimiento de usuario
            fila.insertCell().innerHTML = servicio.descripcion; //Se crea un cell por cada sexo de usuario


            let celdaAcciones = fila.insertCell();

            let botonPerfilProveedor = document.createElement('button');
            botonPerfilProveedor.innerText = 'Ver el perfil del proveedor';
            botonPerfilProveedor.addEventListener('click', () => {
                sessionStorage.setItem('proveedorSeleccionado', JSON.stringify(servicio));
                window.location.href = 'perfil-proveedor.html';
            });


            let botonAdquirirServicio = document.createElement('button');
            botonAdquirirServicio.innerText = 'Adquirir este servicio';

            botonAdquirirServicio.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'title': '¿Está seguro de adquirir este servicio?',
                    'text': 'Una notificación será enviada al proveedor para aceptar o no la propuesta.',
                    'showCancelButton': true,
                    'confirmButtonText': '¡Sí! estoy seguro',
                    'cancelButtonText': 'Cancelar'

                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                                'icon': 'success',
                                'title': 'Propuesta de servicio enviada al proveedor.',
                                'text': ' Por favor espere su respuesta...',
                                /*'imageUrl': 'img/sticker1-success.jpg',
                                'imageWidth': 400,
                                'imageHeight': 200,
                                'imageAlt': 'Custom image'*/
                            }
                            /*'',
                            'Propuesta de servicio enviada al proveedor. Por favor espere su respuesta. ',
                            'success',*/


                        )
                    }
                })

            });
            // Agregarle los botones a la celda

            celdaAcciones.appendChild(botonPerfilProveedor);
            celdaAcciones.appendChild(botonAdquirirServicio);
        }


    });
};


mostrarTabla();

inputFiltro.addEventListener('keyup', mostrarTabla);