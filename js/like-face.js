const InputRequeridos = document.querySelector('.profile');
const inputImg = document.querySelector('#imagen');
const inputFile = document.querySelector('#file');
const btnActualizar = document.querySelector('#btn-actualizar');

//cuando se pasa sobre la imagen 
InputRequeridos.addEventListener('mouseenter', function() {
    btnActualizar.style.display = "block";
});

//Al elegir una foto para subir
inputFile.addEventListener('change', function() {
    const archivoCerrado = this.files[0];
    if (archivoCerrado) {
        // se lee el nuevo archivo
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            inputImg.setAttribute('src', reader.result);
        });
        //se guarda
        reader.readAsDataURL(archivoCerrado);
    }
});
