import express,{ Router, Request, Response } from "express";
import cors from 'cors'
import compression from "compression";

export default class RouterApp {
    
    public modules:any;
    public router:Router = Router();
    
    constructor(modules:any){
        this.modules = modules;
        this.apiConfig()
    }

    public apiConfig(){
        this.router
            .use(cors())
            .use(express.json())
            .use(compression())
    }

    public routes() : Router {
        this.router.use('/api/v1/products',this.modules.products)
        this.router.use('/api/v1/user',this.modules.user)
        this.router.use('/api/v1/cart',this.modules.cart)

        this.router.get('/ping',(req:Request,res:Response,next:Function)=>{
            res.send('ok')
        })

        return this.router;
    }

}