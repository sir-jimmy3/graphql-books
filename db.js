const books = [
    {
        name: 'HARRY POTTER AND THE PHILOSOPHER’S STONE',
        description: 'First book',
        author: 'J.Rowling'
    },
    {
        name: 'HARRY POTTER AND THE CHAMBER OF SECRETS',
        description: 'Second book',
        author: 'J.Rowling'
    },
    {
        name: 'HARRY POTTER AND THE PRISONER OF AZKABAN',
        description: 'Third book',
        author: 'J.Rowling',
    },
    {
        name: 'HARRY POTTER AND THE GOBLET OF FIRE',
        description: 'Fourth book',
        author: 'J.Rowling'
    },
    {
        name: 'THE MYSTERIOUS AFFAIR AT STYLES',
        description: 'First book',
        author: 'Agatha Cristie'
    },
    {
        name: 'THE SECRET ADVERSARY',
        description: 'Second book',
        author: 'Agatha Cristie'
    },
    {
        name: 'THE MUREDR ON THE LINKS',
        description: 'Third book',
        author: 'Agatha Cristie'
    }
]

const authors = [
    {
        name: 'J.Rowling',
        books: []
    },
    {
        name: 'Agatha Cristie',
        books: []
    }
]

module.exports = {
    books,
    authors
}