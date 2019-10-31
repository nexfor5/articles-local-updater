export class Article {
    public articleId!: string;
    public title!: string;
    public author!: string;
    public createdAt!: string;
    public isActive!: boolean;
    public type: string;
    public url: string;

    constructor(data: any) {
        for (const key of Object.keys(data)) {
            this[key] = data[key];
        }
    }
}
