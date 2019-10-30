import {Request, Response} from "express";
import path from "path";
import articlesRoutes from "./articles/routes";

const webRoute = {
    handler: [
        async (req: Request, res: Response) => {
            const allowedExt = [
                ".js",
                ".ico",
                ".css",
                ".png",
                ".jpg",
                ".woff2",
                ".woff",
                ".ttf",
                ".svg",
            ];

            if (allowedExt.filter((ext) => req.url.indexOf(ext) > 0).length > 0) {
                res.sendFile(path.resolve(`dist/public/${req.url}`));
            } else {
                res.sendFile(path.resolve(`dist/public/index.html`));
            }
        }
    ],
    method: "get",
    path: "*"
};

export default [...articlesRoutes, webRoute];
