export class Note {

    id!: string;
    title!: string;
    body!: string;
    creationDate!: Date;

    constructor(rawNote:any){
        this.setId(rawNote);
        this.setTitle(rawNote);
        this.setBody(rawNote);
        this.setCreationDate(rawNote);

    }

    toString(){
        let jsonValue = {
            id: this.getId(),
            title: this.getTitle(),
            body: this.getBody(),
            creationDate: this.getCreationDate()
        }
        return JSON.stringify(jsonValue)+';'
    }

    setId(rawNote:any){
        this.id = rawNote.id;
    }
    
    setTitle(rawNote:any){
        this.title = rawNote?.title;
    }

    setBody(rawNote:any){
        this.body = rawNote?.body;
    }

    
    setCreationDate(rawNote:any){
        if(rawNote.creationDate!=null && rawNote.creationDate!=undefined){
            this.creationDate = new Date(rawNote.creationDate)
        }
        else{
            this.creationDate = new Date();
        }
        
    }

    getId(){
        return this.id;
    }
    
    getTitle(){
        return this.title;
    }

    getBody(){
        return this.body;
    }

    getCreationDate(){
        return this.creationDate;
    }
}
