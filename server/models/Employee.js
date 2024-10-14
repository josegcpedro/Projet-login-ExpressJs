const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String, // Campo para armazenar o nome do funcionário
    email: String, // Campo para armazenar o email do funcionário
    password: String // Campo para armazenar a senha do funcionário
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema); // Cria o modelo Employee baseado no esquema
module.exports = EmployeeModel; // Exporta o modelo Employee para ser usado em outras partes da aplicação