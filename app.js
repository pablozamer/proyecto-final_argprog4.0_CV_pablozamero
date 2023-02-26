//random user generator, para el perfil ficticio 
//variables
const boton= document.querySelector("#boton");
const foto= document.querySelector("#foto");
const nombre= document.querySelector("#nombre");
const correo= document.querySelector("#correo");
const telefono= document.querySelector("#telefono");
//funciones
const generarUsuario = async() => {
try {
    const url= "https://randomuser.me/api/"; 
    const respuesta= await fetch (url);
    const {results}= await respuesta.json();
    const datos= results [0];
    foto.src= datos.picture.medium;
    nombre.textContent= datos.name.first
    correo.textContent= datos.email
    telefono.textContent= datos.phone
} catch (error) {
     console.log(error);
}
}
boton.addEventListener("click", generarUsuario);
document.addEventListener("DOMContentLoaded", generarUsuario);