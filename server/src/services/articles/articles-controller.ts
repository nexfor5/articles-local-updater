import {getArticlesService} from "./providers/HackerNewsProvider";

export const getArticles = async () => {
    return [{a: "1"}];
};

export const updateArticles = async (body: any) => {
    return await getArticlesService();
};

export const deleteArticle = async (articleId: number) => {
    return [{a: "3"}];
};
