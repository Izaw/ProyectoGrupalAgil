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

const mostrarCursoId = (idCurso) => {
    listarCursos();
    let curso = listaCursos.find(cur => cur.idCurso == idCurso)
    if (!curso) {
        console.log('No existe el Curso buscado');        
    }else{
        console.log('Curso Buscado Identificado: ' + curso.idCurso);
        console.log(curso.nombreCompleto);
        console.log(curso.descripcion);
        console.log(curso.valor);
        console.log(curso.modalidad);
        console.log(curso.intensidadHoraria);      
    }
}

const actualizarCurso = (idCurso, nombreCompleto, descripcion, valor, modalidad, intensidadHoraria) =>{
    listarCursos();
    let curso = listaCursos.find(cur => cur.idCurso == idCurso)
    if (!curso) {
        console.log('No existe el curso');        
    }else{
        curso[idCurso] = idCurso;
        curso[nombreCompleto] = correoElectronico;
        curso[descripcion] = descripcion;
        curso[valor] = valor;
        curso[modalidad] = modalidad;
        curso[intensidadHoraria] = intensidadHoraria;
        guardarCurso();
    }
}

const eliminarCurso = (idCurso) => {
    listarCursos();
    let nuevo = listaCursos.filter(cur => cur.idCurso != idCurso );
    if (nuevo.length == listaCursos.length){
        console.log('Ningun curso tiene el id indicado');
    }else{
        listaCursos = nuevo;
        guardarCurso();
    }
}


module.exports = {
    crearCurso,
    mostrarCursos,
    mostrarCursoId,
    actualizarCurso,
    eliminarCurso
}