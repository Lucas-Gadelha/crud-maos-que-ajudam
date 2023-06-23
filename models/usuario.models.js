class UsuarioModel {
    constructor(id, login, senha, nome, telefone, endereco ) {
        this.id = id
        this.login = login
        this.senha = senha
        this.nome = nome
        this.telefone = telefone
        this.endereco = endereco
    }
}
module.exports = UsuarioModel