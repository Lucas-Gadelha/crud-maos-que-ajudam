const UsuarioModel = require("../models/usuario.models")

let Usuarios = [
    { id: 0, login: "instituicao", senha:"1234" ,nome:"maos que ajudam", telefone: "88987654321", endereco:"rua helping hands"},
    { id: 1, login: "voluntario", senha:"0000" ,nome:"lucas", telefone: "88999998888", endereco:"rua lá de casa"} 
]

let id = 2

class UsuarioService {

    static list(){
        return Usuarios
    }

    static register(data){
        let usuario = new UsuarioModel(
            id++,
            data.login,
            data.senha,
            data.nome,
            data.telefone,
            data.endereco
        )
        Usuarios.push(usuario)
        return usuario
    }

    static update(id,data){
        for(let usuario of Usuarios){
            if(usuario.id == id){
                usuario.login = data.login
                usuario.senha = data.senha
                usuario.nome = data.nome
                usuario.telefone = data.telefone
                usuario.endereco = data.endereco
                return usuario
            }
        }
        return null
    }
    static delete(id) {
        for (let i = 0; i<Usuarios.length; i++) {
            if (Usuarios[i].id == id) {
                Usuarios.splice(i, 1);
                return true;
            }
        }
        return false
    }

    static retrieve(id) {
        for (let i = 0; i<Usuarios.length; i++) {
            if (Usuarios[i].id == id) {
                return Usuarios[i];
            }
        }
        return {}
    }
}
module.exports = UsuarioService