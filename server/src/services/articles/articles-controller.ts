import {ArticleModel} from "../../schemas/articles";
import {createConnection, removeConnection} from "../../utils/database";
import {getArticlesService} from "./providers/HackerNewsProvider";

export async function getArticles() {
    try {
        await createConnection();
        const articles = await ArticleModel.find({isActive: true}).sort({createdAt: -1}).limit(20);

        await removeConnection();
        return articles;
    } catch {
        throw new Error("error");
    }
}

export async function updateArticles() {
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
}

export async function deleteArticle(articleId: number) {
    return [{a: "3"}];
}
