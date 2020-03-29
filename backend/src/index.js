const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
// INFORMAR QUE VAMOS USAR JSON NAS REQUISIÇÕES
app.use(express.json())
app.use(routes)

// ROTA / RECURSO
/**
 * METODOS HTTP:
 * 
 * GET: Buscar/Listar uma informação no Back-end
 * POST: Criar uma informação no Back-end
 * PUT: Alterar uma informação no Back-end
 * DELETE: Deletar uma informação no Back-end
 */

/**
 * TIPOS DE PARÂMENTROS
 * 
 * QUERY PARAMS: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Ex: '?nome="gabriel"' const params = request.query
 * ROUTE PARAMS: Parâmetros utilizados para identificar os recursos
 * Ex: '/:id' const params = request.params
 * REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos
 * Ex: {nome: Gabriel} const params = request.body
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB
 */

/**
 * DRIVER: SELECT * FROM users
 * QUERY BUILDER: table('users').select('*').where()
 */
app.listen(3333)