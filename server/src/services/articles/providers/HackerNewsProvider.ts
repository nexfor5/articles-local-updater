import request from "request-promise";

export const getArticlesService = async () => {
    const url = `https://hn.algolia.com/api/v1/search_by_date?query=nodejs`;
    const response = await request(url);
    return response;
};
