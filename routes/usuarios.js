var express = require('express');
var router = express.Router();
var usuarioService = require("../services/usuario.services")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});

router.get(
    "/listar"
    ,
    (req,res,next) => {
        res.json(usuarioService.list())
    }
)

router.post(
    "/register"
    ,
    (req,res,next) => {
        const usuario = usuarioService.register(req.body)
        res.json(usuario)
    }
)

router.put(
    "/update/:id"
    ,
    (req,res,next) => {
        const usuario = usuarioService.update(req.params.id, req.body)
        res.json(usuario)
    }
)

router.delete(
    "/delete/:id"
    ,
    (req,res,next) => {
        const ok = usuarioService.delete(req.params.id);
        if (ok) return res.json({"sucess": true });
        else return res.json({"sucess": false })
    }
)

router.get(
    '/retrieve/:id',
     function(req, res, next) {
        let usuario = usuarioService.retrieve(req.params.id)
        res.json(usuario)
    }
)

module.exports = router;