import {Handler} from "./handler";

export interface IRoute {
    path: string;
    method: string;
    handler: Handler | Handler[];
}
