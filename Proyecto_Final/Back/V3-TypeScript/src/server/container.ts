import middlewares from "middlewares"
import Server from "./server"

import routesModules from '@src/routes/modules'

import routes from "routes"

const server = new Server(middlewares)

export default server;