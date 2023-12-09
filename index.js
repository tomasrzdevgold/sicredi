const express = require("express")
const sqlite3 = require("sqlite3")
const srv = express()
srv.use(require('body-parser').urlencoded({ extended: false }));


srv.post('/cadastro',(req,res)=>{
    let nome = req.body.nome
    let email=  req.body.email
    let descen = req.body.descen
    let db = new sqlite3.Database('cadastro.db')
    let sql = `INSERT INTO cadastro (nome, email, descen_ale) VALUES (?,?,?);`
    db.get(sql,[nome,email,descen],(erro,linha)=>{
        if(erro) throw erro
        res.send(`<!DOCTYPE html>
            <html >
            <h1> Cadastro com succeso <h1>
            </html>`)
    })
    db.close()
})




srv.listen(3030,()=>{
    console.log('Pronto... pela porta 3030')
})