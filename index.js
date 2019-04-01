const {argv} = require('./yargs');
const funcionesUsuarios = require('./funcionesUsuarios');

let comando = argv._[0];

switch(comando){
    case 'crearUsuario':
    funcionesUsuarios.crearUsuario(argv);
    break

    case 'mostrarUsuarios':
    funcionesUsuarios.mostrarUsuarios();
    break

    case 'mostrarUsuarioId':
    funcionesUsuarios.mostrarUsuarioId(argv.documentoIdentidad);
    break

    case 'actualizarUsuario':
    funcionesUsuarios.actualizarUsuario(argv.documentoIdentidad, argv.nombreCompleto, argv.correoElectronico, argv.telefono, argv.rol);
    break

    case 'crearCurso':
    funcionesUsuarios.crearCurso(argv);
    break

    case 'mostrarCursos':
    funcionesUsuarios.mostrarCursos();
    break

    case 'mostrarCursoId':
    funcionesUsuarios.mostrarCursoId(argv.documentoIdentidad);
    break

    case 'actualizarCurso':
    funcionesUsuarios.actualizarCurso(argv.documentoIdentidad, argv.nombreCompleto, argv.correoElectronico, argv.telefono, argv.rol);
    break

    default:
    console.log('No ingresó comando')
}