const Mutation = {
    addBook: (parent, {
        name,
        description,
        author
    }, {books}) => {
        let newBook = {
            name,
            description,
            author
        }

        books.push(newBook)
        return newBook
    },
    removeBook: (parent, { name }, { books }) => {
        let index = books.findIndex(book => {
            return book.name === name
        })
        books.splice(index, 1)
        return true
    }
}

module.exports = Mutation;