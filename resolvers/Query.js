const Query = {
    books: (parent, args, { books }) => books,
    authors: (parent, args, { authors }) => authors,
}

module.exports = Query;