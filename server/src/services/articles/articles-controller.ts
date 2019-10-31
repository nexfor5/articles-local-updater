import {HTTP400Error} from "../../models/http-400-error";
import {HTTP404Error} from "../../models/http-404-error";
import {ArticleModel} from "../../schemas/articles";
import {createConnection, removeConnection} from "../../utils/database";
import {getArticlesService} from "./providers/HackerNewsProvider";

export async function getArticles() {
    await createConnection();
    const articles = await ArticleModel
        .find({isActive: true})
        .sort({createdAt: -1})
        .limit(20);

    await removeConnection();
    return articles;
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
        await removeConnection();
    }
}

export async function deleteArticle(articleId: string) {
    if (!articleId && articleId.length > 0) {
        throw new HTTP400Error("Invalid inputs");
    }

    await createConnection();
    const article = await ArticleModel.findOne({articleId});

    if (article) {
        article.set("isActive", false);
        await article.save();
    } else {
        throw new HTTP404Error("Article doesn't exist");
    }

    await removeConnection();
    return articleId;
}
