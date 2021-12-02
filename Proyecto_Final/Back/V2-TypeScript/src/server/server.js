import express from 'express'
import mongoose from "mongoose"
import {MONGO_URI,PORT} from "../config/globals"


const startServer = () =>{
    express().listen(PORT,()=>{
        console.info(`Servidor en localhost:${PORT}`)
    })
}

const getConnection = () => {
    mongoose.connect(MONGO_URI)
}
