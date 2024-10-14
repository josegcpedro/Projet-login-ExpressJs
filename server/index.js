const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json()); // Middleware para parsear JSON
app.use(cors()); // Middleware para habilitar CORS

mongoose.connect("mongodb://localhost:27017/employee"); // Conecta ao banco de dados MongoDB

app.post('/login', (req, res) => {
    const { email, password } = req.body; // Extrai email e senha do corpo da requisição
    EmployeeModel.findOne({ email, password }) // Busca um usuário com o email e senha fornecidos
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json('Login success'); // Retorna sucesso se a senha estiver correta
            } else {
                res.json('Password not valid'); // Retorna erro se a senha estiver incorreta
            }
        } else {
            res.json({ message: 'User not found' }); // Retorna erro se o usuário não for encontrado
        }
    })
    .catch(err => res.json(err)); // Retorna erro em caso de falha na busca
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body) // Cria um novo usuário com os dados fornecidos
    .then(employees => res.json(employees)) // Retorna os dados do usuário criado
    .catch(err => res.json(err)) // Retorna erro em caso de falha na criação
})

app.listen(3001, () => {
    console.log('Server is running on port 3001'); // Loga mensagem indicando que o servidor está rodando
});

// oque é middleware? 

// Middleware é uma função que recebe os objetos request e response e pode realizar operações sobre eles, como modificar os dados, adicionar novas propriedades, ou realizar validações.

// Cors é um middleware que habilita o Cross-Origin Resource Sharing (CORS) em uma aplicação Express. Ele permite que um servidor especifique quem pode acessar seus recursos, e como eles podem ser acessados.