import {NextFunction, Request, Response, Router} from "express";

type Wrapper = ((router: Router) => void);

export const applyMiddleware = (
    middlewareWrappers: Wrapper[],
    router: Router
) => {
    for (const wrapper of middlewareWrappers) {
        wrapper(router);
    }
};

type Handler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<void> | void;

interface IRoute {
    path: string;
    method: string;
    handler: Handler | Handler[];
}

export const applyRoutes = (routes: IRoute[], router: Router) => {
    for (const route of routes) {
        const {method, path, handler} = route;
        (router as any)[method](path, handler);
    }
};
