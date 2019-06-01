const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como compleatod o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar una tarea por hacer', {
        descripcion,
        completado
    })
    .command('listar', 'Mostrar todas las tareas por hacer')
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}