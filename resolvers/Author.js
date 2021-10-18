const Author = {
    books: (parent, args, {books}) => {
        return books.filter(book => {
            return book.author === parent.name
        })
    }
}

module.exports = Author;