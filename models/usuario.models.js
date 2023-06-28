var mongoose = require("mongoose")

var UsuarioSchema = mongoose.Schema(
    {
        login:{type:String,required:true},
        senha:{type:String,required:true},
        nome:{type:String,required:true},
        telefone:{type:String,required:true},
        endereco:{type:Number,required:true}
    }
)

var UsuarioModel = mongoose.model("usuarios",UsuarioSchema)
module.exports = UsuarioModel