'use strict'

const activar = () => {



    if (selectProvincia.value == '') {
        selectCanton.disabled = true;

    } else {
        selectCanton.disabled = false;
    }
    if (selectCanton.value == '') {
        selectDistrito.disabled = true;

    } else {
        selectDistrito.disabled = false;
    }

};

addEventListener('change', activar);