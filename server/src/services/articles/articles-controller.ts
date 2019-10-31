import {ArticleModel} from "../../schemas/articles";
import {createConnection, removeConnection} from "../../utils/database";
import {getArticlesService} from "./providers/HackerNewsProvider";

export const getArticles = async () => {
    try {
        await createConnection();
        const articles = await ArticleModel.find().sort({date: "desc"});

        await removeConnection();
        return articles;
    } catch {
        throw new Error("error");
    }
};

export const updateArticles = async () => {
    try {
        await createConnection();

        const newArticles = await getArticlesService();
        const oldArticles: any[] = [];

        for (const newArticle of newArticles) {
            const exist = await ArticleModel.find({articleId: newArticle.articleId});

            if (!exist || (exist && exist.length === 0)) {
                newArticle.isActive = newArticle.title.trim().length > 0;
                const article = await ArticleModel.create(newArticle);
                oldArticles.push(article);
            } else {
                oldArticles.concat(exist);
            }
        }

        await removeConnection();
        return oldArticles;
    } catch {
        throw new Error("error");
    }
};

export const deleteArticle = async (articleId: number) => {
    return [{a: "3"}];
};
