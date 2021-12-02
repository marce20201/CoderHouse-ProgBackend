import { Router } from "express";

export const cartRouter = (router:Router,controller:any) =>{
    router.get('/',controller.getAll)

    return router;
}