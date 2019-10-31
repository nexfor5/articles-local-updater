export class Article {
    public static toSchema() {
        return {
            articleId: String,
            author: String,
            createdAt: Date,
            isActive: Boolean,
            title: String,
            type: String
        };
    }

    public articleId!: string;
    public title!: string;
    public author!: string;
    public createdAt!: string;
    public isActive!: boolean;
    public type: string;

    constructor(data: any) {
        this.isActive = true;
        this.type = data.story_title ? "comment" : "story";

        if (data.objectID) {
            this.articleId = `${this.type}_${data.objectID}`;
        }

        if (data.story_title || data.title) {
            this.title = data.story_title ? data.story_title : data.title;
        }

        if (data.author) {
            this.author = data.author;
        }

        if (data.created_at) {
            this.createdAt = data.created_at;
        }
    }
}
