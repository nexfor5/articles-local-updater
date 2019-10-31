import {connect, disconnect} from "mongoose";

export function createConnection() {
    return connect("mongodb://root:example@mongo:27017/news?authSource=admin", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

export function removeConnection() {
    return disconnect();
}
