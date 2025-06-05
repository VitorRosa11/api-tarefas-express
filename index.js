const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const tarefas = [];

app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

app.post('/tarefas', (req, res) => {
    const { descricao, status } = req.body;

    if (!descricao || !status) {
        return res.status(400).send('Erro: descricao e status são obrigatórios.');
    }

    const novaTarefa = {
        id: Date.now(), 
        descricao,
        status,
        dataCriacao: new Date().toISOString()
    };

    tarefas.push(novaTarefa);

    res.status(201).json({
        mensagem: 'Tarefa criada com sucesso!',
        tarefa: novaTarefa
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});