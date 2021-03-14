const inputs = document.querySelectorAll('form .campo input');
console.log(inputs);

// addEventListener no funciona con node-list(queryselectorall)
inputs.forEach(input => {
    input.addEventListener('blur', validarInputs);
}); 

inputs.forEach(input => {
    input.addEventListener('input', validarInputs);
}); 

function validarInputs(inputTeclado) {
    //Verificar recoger dato del input
    console.log(inputTeclado.target.value);

    const estado = ['valido', 'no-valido'];

    let clase;
    if (inputTeclado.target.value.length === 0) {
        clase = estado[1];
    } else {
        clase = estado[0];
    }
    // Validar clase estado
    console.log(clase);
    //spred or reitor. no importa si es valido o no. elimina valido y no-valido
    inputTeclado.target.classList.remove(...estado);    
    // agregar en Input las clases valido, no-valido
    inputTeclado.target.classList.add(clase);
    // Label agrega clase valido no-valido. Para trabajar con ella
    inputTeclado.target.nextElementSibling.classList.remove(...estado);
    inputTeclado.target.nextElementSibling.classList.add(clase);
    
    // inyectar el div con el error
    if (clase === 'no-valido') {
        // detecta que no existe la clase alerta. agrega
        if (inputTeclado.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {            
        
        const errorDiv = document.createElement('div');
        errorDiv.appendChild( document.createTextNode('Este campo es obligatorio') );
        errorDiv.classList.add('alerta');
        // insertar el error
        console.log(inputTeclado.target );
        inputTeclado.target.parentElement.parentElement.insertBefore(errorDiv,inputTeclado.target.parentElement.nextElementSibling );
        }
    } else {
        // detecta que existe la clase alerta. limpiar mensaje error si existe
        if (inputTeclado.target.parentElement.nextElementSibling.classList[0] == 'alerta') {
            inputTeclado.target.parentElement.nextElementSibling.remove();
            
        }
    }
}

// Mostrar ocultar Password
const mostrarPasswordBtn = document.querySelector('form .campo span');
// ver si selecciona
console.log(mostrarPasswordBtn);
mostrarPasswordBtn.addEventListener('click', (mostrarOcultarPass) =>{
    const passwordInput = document.querySelector('#password');
    if (mostrarOcultarPass.target.classList.contains('mostrar')) {
        // Mostrar el texto
        mostrarOcultarPass.target.classList.remove('mostrar');         
         // cambiar el texto
         mostrarOcultarPass.target.textContent = 'Ocultar';
         // Cambiamos a password
         passwordInput.type = 'text';
    } else {
        // Crea la clase mostrar en elemento span. mostrar el password
        mostrarOcultarPass.target.classList.add('mostrar');
        // cambiar el texto
        mostrarOcultarPass.target.textContent = 'Mostrar';
        // Cambiamos a password
        passwordInput.type = 'password';
    }
})