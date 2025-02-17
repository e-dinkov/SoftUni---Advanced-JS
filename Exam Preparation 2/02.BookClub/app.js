class BookClub {
    constructor(library) {
        this.library = library
        this.books = []
        this.members = []
    }
    addBook(title, author) {
        let isFound = this.books.find(book => book.title === title && book.author === author)
        if (isFound === undefined) {
            let temp = {
                title: title,
                author: author
            }
            this.books.push(temp)
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        }
        else {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        }
    }
    addMember(memberName) {
        let isFound = this.members.find(member => member.name === memberName)
        if (isFound === undefined) {
            let temp = {
                name : memberName
            }
            this.members.push(temp)
            return `Member ${memberName} has been joined to the book club.`
        }
        else {
            return `Member ${memberName} is already a part of the book club.`
        }
    }
    assignBookToMember(memberName, bookTitle) {
        let isMember = this.members.findIndex(member => member.name === memberName)
        let isBook = this.books.findIndex(
          (book) => book.title === bookTitle
        );
        if (isMember == -1) {
            throw new Error (`Member ${memberName} not found.`);
        }
        if (isBook === -1) {
            throw new Error(`Book "${bookTitle}" not found.`) ;
        }
        let removeBook = this.books.splice(isBook, 1)
        
        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${removeBook[0]["author"]}.`;
    }
    generateReadingReport() {
        if (this.members.length === 0) {
            return "No members in the book club.";
        }
        if (this.books.length === 0) {
            return "No available books in the library.";
        }
        let firstLine = `Available Books in ${this.library} library:\n`
        let secondLine = this.books.map(book => {
            return `"${book.title}" by ${book.author}`;
        }).join("\n")
        return firstLine + secondLine

    }
}
const myBookClub = new BookClub("The Bookaholics");
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());


