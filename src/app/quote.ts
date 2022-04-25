export class Quote {
    QUOTES:string;
    UPVOTES:number;
    DOWNVOTES:number;
    AUTHOR:string;

    constructor(QUOTES:string,UPVOTES:number,DOWNVOTES:number, AUTHOR:string,public completeDate: Date)
    {
        this.QUOTES=QUOTES;
        this.UPVOTES=UPVOTES;
        this.DOWNVOTES=DOWNVOTES;
        this.AUTHOR=AUTHOR;
    }
}
