export class BlogPost {
    public id: number;
    public title: string;
    public body: string;
    public publishDate: Date;
    public images: string[];

    constructor(input: Object) {
        this.id = input['_id'];
        this.title = input['title'];
        this.body = input['body'];
        this.publishDate = input['created'];
    }
}