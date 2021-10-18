const Book = {
    author: (parent, args, {authors}) => {
        return authors.find(author => {
            return author.name === parent.author
        })
    }
}

module.exports = Book;