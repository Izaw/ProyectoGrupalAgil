const fs = require('fs');
listaUsuarios = [];

const crearUsuario = (usuarioParam) => {
    listarUsuarios();
    let usuario = {
        documentoIdentidad: usuarioParam.documentoIdentidad,
        nombreCompleto: usuarioParam.nombreCompleto,
        correoElectronico: usuarioParam.correoElectronico,
        telefono: usuarioParam.telefono,
        rol: usuarioParam.rol
    }
    let duplicado = listaUsuarios.find(usu => usu.documentoIdentidad == usuarioParam.documentoIdentidad)
    if (!duplicado) {
        listaUsuarios.push(usuario);
        guardarUsuario();
    }else{
        console.log('Ya existe un usuario registrado con este documento de identidad.');        
    }
}

const listarUsuarios = () => {
    try{
        listaUsuarios = require('./listado.json')
    }catch(error){
        listaUsuarios = [];
    }
}

const guardarUsuario = () => {
    let datos = JSON.stringify(listaUsuarios);
    fs.writeFile('listado.json',datos,(err) =>{
        if (err) throw (err);
        console.log('Usuario Creado');        
    })
}

const mostrarUsuarios = () => {
    listarUsuarios();
    listaUsuarios.forEach(usuario => {
        console.log('Estudiante Identificado: ' + usuario.documentoIdentidad);
        console.log(usuario.nombreCompleto);
        console.log(usuario.correoElectronico);
        console.log(usuario.telefono);
        console.log(usuario.rol);      
    })
}

const mostrarUsuarioId = (documentoIdentidad) => {
    listarUsuarios();
    let usuario = listaUsuarios.find(usu => usu.documentoIdentidad == documentoIdentidad)
    if (!usuario) {
        console.log('No existe el Usuario buscado');        
    }else{
        console.log('Estudiante Buscado Identificado: ' + usuario.documentoIdentidad);
        console.log(usuario.nombreCompleto);
        console.log(usuario.correoElectronico);
        console.log(usuario.telefono);
        console.log(usuario.rol);     
    }
}

const actualizarUsuario = (documentoIdentidad, nombreCompleto, correoElectronico, telefono, rol) =>{
    listarUsuarios();
    let usuario = listaUsuarios.find(usu => usu.documentoIdentidad == documentoIdentidad)
    if (!usuario) {
        console.log('No existe el usuario');        
    }else{
        usuario[nombreCompleto] = nombreCompleto;
        usuario[nombreCompleto] = correoElectronico;
        usuario[telefono] = telefono;
        usuario[rol] = rol;
        guardarUsuario();
    }
}

const eliminarUsuario = (documentoIdentidad) => {
    listarUsuarios();
    let nuevo = listaUsuarios.filter(usu => usu.documentoIdentidad != documentoIdentidad );
    if (nuevo.length == listaUsuarios.length){
        console.log('Ningún usuario tiene la identificación indicada');
    }else{
        listaUsuarios = nuevo;
        guardarUsuario();
    }
}


module.exports = {
    crearUsuario,
    mostrarUsuarios,
    mostrarUsuarioId,
    actualizarUsuario,
    eliminarUsuario
}