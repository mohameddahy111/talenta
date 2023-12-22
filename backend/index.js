import express from "express";
const port = 3001
import dotenv from "dotenv"
import cors from 'cors'
import { connect } from "./db/connect.js";
import routerAdmin from './admin/admin.router.js'
import routerCustomer from './customer/customer.router.js'
import routerProject from './projects/projects.route.js'
  

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/admins/', routerAdmin)
app.use('/customer/', routerCustomer)
app.use('/project/', routerProject)

app.use((err, req, res, next) => {
    res.status(err.status || 400).send(err.message);
})
connect()

app.listen(process.env.PORT || port , () => {
    console.log(`http://localhost:${port}`)
})