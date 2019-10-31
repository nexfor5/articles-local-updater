import {connect, disconnect} from "mongoose";

export function createConnection() {
    return connect("mongodb://root:example@localhost:3001/news?authSource=admin", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

export function removeConnection() {
    return disconnect();
}
