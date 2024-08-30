import { config } from "dotenv";

config();

export default {
    host: process.env.HOST || "localhost",
    database: process.env.DATABASE || "gestion_productos",
    user: process.env.USER || "root",
    password: process.env.PASSWORD || ""
};
