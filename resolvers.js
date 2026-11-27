const data = {
    authors:[
        {id:"1", name:"Dheeraj", bookIds:["101", "102"]},
        {id:"2", name:"Umesh", bookIds:["103"]}
    ],
    books:[
        {id:"101", title:"Book 1", publishedYear:2021, authorId:"1"},
        {id:"102", title:"Book 2", publishedYear:2022, authorId:"1"},
        {id:"103", title:"Book 3", publishedYear:2023, authorId:"2"}
    ]
}

export const resolvers = {
    Book: {
        auhtor: (parent, args, context, info) => {
            return data.authors.find(authorDetail => authorDetail.id === parent.authorId);
        }
    },
    Author: {
        books: (parent, args, context, info) => {
            return data.books.filter(book => parent.bookIds.includes(book.id));
        }
    },
    Query: {
        authors: (parent, args, context, info) => {
            return data.authors
        },
        books: (parent, args, context, info) => {
            return data.books
        }
    },
    Mutation: {
        addBook: (parent, args, context, info) => {
            const newBook = {...args, id: "10"+data.books.length+1};
            data.books.push(newBook);
            return newBook;
        }
    }
}