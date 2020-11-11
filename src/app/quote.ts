export class Quote {
    public upvotes: number;
    public downvotes: number;
    public completeDate: Date;
    public name: string;
    public author: string;
    public quote; string;


    constructor( name: string,  author: string, quote: string){

        this.name = name;
        this.author = author;
        this.quote = author;
        this.upvotes = 0;
        this.downvotes = 0;
        this.completeDate = new Date;
    }
}
