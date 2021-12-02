import { Router } from "express";

export const productRouter= (router:Router,controller:any) =>{
    router.get('/',controller.getAll)

    return router;
}