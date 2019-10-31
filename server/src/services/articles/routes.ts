import {Request, Response} from "express";
import {deleteArticle, getArticles, updateArticles} from "./articles-controller";

export default [
    {
        handler: [
            async (req: Request, res: Response) => {
                const result = await getArticles();
                res.status(200).send(result);
            }
        ],
        method: "get",
        path: "/api/v1/articles"
    },
    {
        handler: [
            async ({query}: Request, res: Response) => {
                const result = await deleteArticle(query.articleId);
                res.status(200).send(result);
            }
        ],
        method: "delete",
        path: "/api/v1/articles"
    },
    {
        handler: [
            async (req: Request, res: Response) => {
                const result = await updateArticles();
                res.status(200).send(result);
            }
        ],
        method: "put",
        path: "/api/v1/articles"
    }
];
