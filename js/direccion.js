'use strict'
const arrayProvincia = ['San José', 'Cartago', 'Puntarenas', 'Limón', 'Alajuela', 'Guanacaste', 'Heredia'];
const arrayCanton = ['Escazú', 'Coronado', 'Moravia', 'Tibás'];
const arrayDistrito = ['San Vicente', 'San Jeronimo', 'La Trinidad'];

const selectProvincia = document.querySelector('#slt-Provincia');
const selectCanton = document.querySelector('#slt-Canton');
const selectDistrito = document.querySelector('#slt-Distrito');

const mostrarOpciones = () => {
    switch (selectTipo.value) {
        case 'San José':
            llenarSelectRaza(selectCanton, arrayCanton);
            break;



    }
};
selectTipo.addEventListener('change', mostrarOpciones);