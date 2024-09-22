let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena')



const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generar(){
    let numeroDijitado = parseInt(cantidad.value);
    console.log(numeroDijitado);

    if (numeroDijitado < 8 ) {
        alert( "la cantidad de caracteres tiene que ser mayor que 6")
    }

    let password = '';
    // i = i
    for (let i = 0; i < numeroDijitado; i++) {
        let cadenaAleatoria = cadenaCaracteres[
            Math.floor(Math.random() * cadenaCaracteres.length)
        ];

        password += cadenaAleatoria;
    }
    contraseña.value = password; 
}






