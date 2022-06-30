const listadoController = {
    fullstack:(req,res)=>{
            res.render('fullstack')
    },
    backend:(req,res)=>{
        res.render('backend')
    },
    frontend:(req,res)=>{
        res.render('frontend')
    },
}

module.exports = listadoController;