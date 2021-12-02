//const express = require("express")
import express, { Application } from "express"
import mongoose, { mongo } from "mongoose"
import {globals} from "@src/config/globals"
import IApp from "@src/interfaces/IApp";

export default class Server implements IApp {

    public readonly mongoose
    public readonly express : Application
    public middlewares

    constructor(middlewares:any){
        this.mongoose = mongoose;
        this.express = express();
        this.middlewares = middlewares;
    }

    public start():void{
        this.express.listen(globals.PORT,()=>{
            console.info(`Servidor en localhost:${globals.PORT}`)
        })
    }
    
    public start_test(){}
    
    public async getConnection():Promise<void>{
        await this.mongoose.connect(globals.MONGO_URI)
    }
}