export class GithubRepo {
    public id: number;
    public name: string;
    public description: string;
    public language: string;
    public createdDate: Date;
    public lastPushDate: Date;
    public url: string;

    constructor(input: Object) {
        this.id = input['id'];
        this.name = input['name'];
        this.description = input['description'];
        this.language = input['language'];
        this.createdDate = input['created_at'];
        this.lastPushDate = input['pushed_at'];
        this.url = input['url'];
    }
}