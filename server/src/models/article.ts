export class Article {
    public static toSchema() {
        return {
            articleId: String,
            author: String,
            createdAt: Date,
            isActive: Boolean,
            title: String,
            type: String,
            url: String
        };
    }

    public articleId!: string;
    public title!: string;
    public author!: string;
    public createdAt!: string;
    public isActive!: boolean;
    public type: string;
    public url: string;

    constructor(data: any) {
        this.isActive = true;
        this.type = data.story_title ? "comment" : "story";
        this.articleId = data.story_id ? data.story_id : data.objectID;
        this.title = data.story_title ? data.story_title : data.title;
        this.url = data.story_url ? data.story_url : data.url;
        this.author = data.author;
        this.createdAt = data.created_at;
    }
}
