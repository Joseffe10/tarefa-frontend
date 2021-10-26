import * as dotenv from 'dotenv';

const express = require('express')
const app = express()

dotenv.config();

const PORT = process.env.PORT || 3000

app.use(express.static('build'))
app.listen(PORT, () => console.log('Servidor Front em execução!'))