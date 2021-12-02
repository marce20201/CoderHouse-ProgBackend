require('dotenv').config()

export const globals = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGO_URI: ""
};