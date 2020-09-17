
export class Store {
    text = [
        'Text1', 'Text2', 'Text3', 'Text4', 'Text5',
    ];
    iterator = 0;
    archive = [];

     getNext() {
         if(this.iterator >= this.text.length) this.iterator = 0

         const text = this.text[this.iterator];
         this.iterator++;
         return text
     }


     addToArchive(text) {
         console.log('Archive: ' + text);
        this.archive.push(text);
     }

     logArchive() {
         this.archive.forEach(el => console.log(el))
     }
}

