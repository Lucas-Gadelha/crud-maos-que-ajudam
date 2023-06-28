const UsuarioModel = require("../models/usuario.models")

// let Usuarios = [
//     { id: 0, login: "instituicao", senha:"1234" ,nome:"maos que ajudam", telefone: "88987654321", endereco:"rua helping hands"},
//     { id: 1, login: "voluntario", senha:"0000" ,nome:"lucas", telefone: "88999998888", endereco:"rua lá de casa"} 
// ]

// let id = 2

class UsuarioService {
    static list(request,response) {
        UsuarioModel.find()
        .then(
            (usuarios) => {
                response.status(201).json(usuarios)     
            }
        )
    }

    static register(request,response) {
        UsuarioModel.create(request.body)
        .then(
            (usuario) => {
                response.status(201).json(usuario)
            }
        )
    }

    static retrieve(request,response) {
        UsuarioModel.findById(request.params.id)
        .then(
            (usuario) => {
                response.status(201).json(usuario)
            }
        )
    }

    static update(request,response) {
        UsuarioModel.findByIdAndUpdate(
                    request.params.id,
                    request.body,
                    {new:true})
        .then(
            (usuario) => {
                response.status(201).json(usuario)
            }
        )
    }

    static delete(request,response) {
        UsuarioModel.findByIdAndRemove(request.params.id)
        .then(
            (usuario) => {
                response.status(201).json(usuario)
            }
        )
    }
}
module.exports = UsuarioService