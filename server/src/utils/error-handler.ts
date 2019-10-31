import {NextFunction, Response} from "express";
import {HTTP404Error} from "../models/http-404-error";
import {HTTPClientError} from "../models/http-client-error";

export function notFoundError() {
    throw new HTTP404Error("Method not found.");
}

export function clientError(err: Error, res: Response, next: NextFunction) {
    if (err instanceof HTTPClientError) {
        res.status(err.statusCode).send(err.message);
    } else {
        next(err);
    }
}

export function serverError(err: Error, res: Response, next: NextFunction) {
    if (process.env.NODE_ENV === "production") {
        res.status(500).send("Internal Server Error");
    } else {
        res.status(500).send(err.stack);
    }
}
