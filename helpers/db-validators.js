const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async(role = '') => {

    const existeRol = await Role.findOne({ role });
    if ( !existeRol ) {
        throw new Error(`El role ${ role } no está registrado en la BD`);
    }
}

const emailExiste = async( email = '' ) => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ email });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ email }, ya está registrado`);
    }
}

const existeUsuarioPorId = async( id ) => {

    // Verificar si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`El id no existe ${ id }`);
    }
}



module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}

