import {Application} from 'express'

export default interface IApp {
    express: Application,
    mongoose: any,
    middlewares: any,
    start:()=>void,
    start_test:()=>void,
    getConnection:()=>Promise<void>
}