require("express-async-errors")
const express = require("express")
const AppError = require("./utils/AppError")
const routes = require("./routes")
const uploadConfig = require('./configs/upload')
const cors = require('cors')
const appError = new AppError;
const app = express()


app.use(cors())
app.use(express.json())

app.use("/files", express.static(uploadConfig.UPLOAD_FOLDER))

//Realiza tentativa de Rotas
app.use(routes)


//tratamento de erro - Caso volte um erro
app.use((error, request, response, next)=>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            message: "error",
            status: error.message
        })
    }
    console.log(error)
    return response.status(500).json({
        message: "error",
        status: "internal server error"
    })
})





const PORT = 3333
app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`))