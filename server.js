//IMPORTS
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const User = require('./database/user')

//START DO SERVER EXPRESS
const app = express()


//START DA DATABASE SQL
async function start(){
    const database = require('./database/db')
    const User = require('./database/user')
    await database.sync()
}
    start()





//FUNÇÕES PARA PASSAR O JSON
app.use(cors())
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())





app.get('/login', (req,res) => {
    console.log('login')
    res.send('oi')
})
app.get('/adm',(req, res) => {
    res.send()
})

//ROTA DE AUTENTICAÇÃO DE LOGIN DO USUÁRIO
app.post('/login', async (req, res) => {
  const response = await User.findOne({
      where:{
          name: req.body.name,
          password: req.body.password
      }
  })
  if(response === null){
     let errors = 'error'
     res.send(errors)
  }else{
    console.log('deu certo')
    res.send(response)
      
  }

})

//ROTA DE EDIT DE VALORES BANCÁRIOS
app.post('/transferir', async (req,res) =>{
    const id = req.body.my
    const response = await User.findOne({
        where:{
            id: req.body.id
        }

    })
    const user = await User.findOne({
        where:{
            id: id
        }
    })
    
    if(response === null){
        res.send(response)
        console.log('nao deu certo')
    }else{
    let valor = parseFloat(req.body.value)
    let total = parseFloat(response.preco)
    let total2 = parseFloat(user.preco)
    if(total2 < valor){
        let erro = 'Não possui fundos para realizar essa transação'
        res.send(erro)
        console.log('nao deu certo')
    }else{
        let resultado = (total + (valor))

      //  let resultado2 = (valor - (total2))
       
        console.log(id)
        
        console.log(valor)
        console.log(total)
        console.log(resultado)
          response.preco = (resultado)
           response.save()
       
         
           if(user === null){
               
               let erro2 = 'Erro no sistema, tente mais tarde'
               res.send(erro2)
           }else{
            let valor2 = parseFloat(req.body.value)
            let total2 = parseFloat(user.preco)
            let resultado2 = (total2 -(valor2))
            user.preco = (resultado2)
            user.save()
            res.send(response)
             console.log('deu certo')
           }

    }
  
    }
})




app.listen(8080, () => console.log('Server NodeJS rodando[8080]'))