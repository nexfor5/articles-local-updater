import express from "express";
import http from "http";
import cron from "node-cron";
import middleware from "./middleware";
import errorHandlers from "./middleware/error-handlers";
import routes from "./services";
import {updateArticles} from "./services/articles/articles-controller";
import {applyMiddleware, applyRoutes} from "./utils";

process.on("uncaughtException", (e) => {
    process.exit(1);
});

process.on("unhandledRejection", (e) => {
    process.exit(1);
});

cron.schedule("0 * * * *", () => {
    updateArticles();
    // tslint:disable-next-line:no-console
    console.log("---Sync data done---");
});

const router = express();

applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const {PORT = 3000} = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
    // tslint:disable-next-line:no-console
    console.log(`Server is running http://localhost:${PORT}...`)
);
