export class Note{
    Id: number;
    Text: string;
    IsComplete: boolean;

    constructor(id: number, text: string, isComplete: boolean){
        this.Id = id;
        this.Text= text;
        this.IsComplete = isComplete;
    }
}