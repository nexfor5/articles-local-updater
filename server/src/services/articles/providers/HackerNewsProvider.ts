import request from "request-promise";
import {Article} from "../../../models/article";

export async function getArticlesService(): Promise<Article[]> {
    const url = `https://hn.algolia.com/api/v1/search_by_date?query=nodejs`;
    const response = JSON.parse(await request(url));
    return response.hits.map((article: any) => new Article(article));
}
