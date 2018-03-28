export class Init {
    load() {
        if (localStorage.getItem('books') === null || localStorage.getItem('books') === undefined) {
            console.log('Creating the initial set of books ...');
            let books = [
                {
                    bookID: '2:C:1234-1234-1',
                    title: '2 States',
                    author: 'Chetan Bhagat',
                    ISBN: '1234-1234-1',
                    publicationDate: '2017-10-20',
                    publisher: 'Penguin Publications',
                    price: 230,
                    genre: 'Developers Hack',
                    format: 'Paperback'
                },
                {
                    bookID: 'H:C:1234-1453-1',
                    title: 'Half Girlfriend',
                    author: 'Chetan Bhagat',
                    ISBN: '1234-1453-1',
                    publicationDate: '2015-10-23',
                    publisher: 'Red Hills Publications',
                    price: 200,
                    genre: 'Drama',
                    format: 'Paperback'
                },
                {
                    bookID: 'T:P:1234-1453-2',
                    title: 'The Alchemist',
                    author: 'Paulo Coelho',
                    ISBN: '1234-1453-2',
                    publicationDate: '2003-01-16',
                    publisher: 'HarperCollins',
                    price: 430,
                    genre: 'Fantasy',
                    format: 'Paperback'
                },
                {
                    bookID: 'E:P:1234-1453-2',
                    title: 'Eleven Minutes',
                    author: 'Paulo Coelho',
                    ISBN: '1234-1453-2',
                    publicationDate: '2003-01-16',
                    publisher: 'HarperCollins',
                    price: 350,
                    genre: 'Romance',
                    format: 'Paperback'
                },
                {
                    bookID: 'T:A:1234-1453-3',
                    title: 'The Immortals of Meluha',
                    author: 'Amish Tripathi',
                    ISBN: '1234-1453-3',
                    publicationDate: '2010-01-16',
                    publisher: 'Mcraw Hills Publications Pvt. Ltd.',
                    price: 450,
                    genre: 'Fantasy',
                    format: 'Audiobook'
                },
                {
                    bookID: 'S:A:1234-1453-4',
                    title: 'Sita - Warrior of Mithila',
                    author: 'Amish Tripathi',
                    ISBN: '1234-1453-4',
                    publicationDate: '2017-05-29',
                    publisher: 'Mcraw Hills Publications Pvt. Ltd.',
                    price: 320,
                    genre: 'Mythology',
                    format: 'Hardcover'
                },
                {
                    bookID: 'I:T:978-0-262-03384-8',
                    title: 'Intro to Algorithms',
                    author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein',
                    ISBN: '978-0-262-03384-8',
                    publicationDate: '1989-01-16',
                    publisher: 'MIT Press',
                    price: 970,
                    genre: 'Science',
                    format: 'Hardcover'
                }
            ];
            localStorage.setItem('books', JSON.stringify(books));
        } else {
            console.log('Loaded the books from local storage ...');
        }
    }
}
