import { Router } from "express";

export default (router:Router,controller:any) =>{
    router.get('/',controller.getAll)

    return router;
}