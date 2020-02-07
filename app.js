const express = require('express');

const app = new express();
const PORT = 4000;
const Patos = require('./models/patos');

app.get("/", (req, res) => {
    res.send("Bienvenido")
})

app.get("/patos", (req, res) => {
    const patos = new Patos();
    res.send(patos.mallardDuck());
})

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto: " + PORT)
})
