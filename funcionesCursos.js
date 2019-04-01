const fs = require('fs');
listaCursos = [];

const crearCurso = (cursoParam) => {
    listarCursos();
    let curso = {
        idCurso: cursoParam.idCurso,
        nombreCompleto: cursoParam.nombreCompleto,
        descripcion: cursoParam.descripcion,
        valor: cursoParam.valor,
        modalidad: cursoParam.modalidad,
        intensidadHoraria: cursoParam.intensidadHoraria
    }
    let duplicado = listaCursos.find(cur => cur.idCurso == cursoParam.idCurso)
    if (!duplicado) {
        listaCursos.push(curso);
        guardarCurso();
    }else{
        console.log('Ya existe un curso registrado con este Identificador.');        
    }
}

const listarCursos = () => {
    try{
        listaCursos = require('./listadoCursos.json')
    }catch(error){
        listaCursos = [];
    }
}

const guardarCurso = () => {
    let datos = JSON.stringify(listaCursos);
    fs.writeFile('listadoCursos.json',datos,(err) =>{
        if (err) throw (err);
        console.log('Curso Creado');        
    })
}

const mostrarCursos = () => {
    listarCursos();
    listaUsuarios.forEach(curso => {
        console.log('Curso Identificado: ' + curso.idCurso);
        console.log(curso.nombreCompleto);
        console.log(curso.descripcion);
        console.log(curso.valor);
        console.log(curso.modalidad);
        console.log(curso.intensidadHoraria);      
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


module.exports = {
    crearUsuario,
    mostrarUsuarios,
    mostrarUsuarioId,
    actualizarUsuario,
    actualizarUsuario
}