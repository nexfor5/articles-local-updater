import {Router} from "express";
import {IRoute} from "../models/router";

type Wrapper = ((router: Router) => void);

export const applyMiddleware = (
    middlewareWrappers: Wrapper[],
    router: Router
) => {
    for (const wrapper of middlewareWrappers) {
        wrapper(router);
    }
};

export const applyRoutes = (routes: IRoute[], router: Router) => {
    for (const route of routes) {
        const {method, path, handler} = route;
        (router as any)[method](path, handler);
    }
};
