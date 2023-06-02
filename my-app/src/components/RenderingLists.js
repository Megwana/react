import React from 'react'
import Book from './Book'

function RenderingLists(props) {
    const bookList = [
        'to kill a mocking bird',
        'the great gatsby',
        'the catcher in the rye'
    ]

    const books = [
        {
            title: 'to kill a mocking bird',
            author: 'harper ice',
            pages: 283
        },
        {
            title: 'the great gatsby',
            author: 'f. scott',
            pages: 218
        },
        {
            title: 'the catcher in the rye',
            author: 'harper ice',
            pages: 234
        }
    ]
    return (
        <div>
            {bookList.map(book => {
                return <h2 key={book}>{book}</h2>
            })}
            <hr />
            {
                books.map(book => {
                    return (
                        <div key={book.title}>
                            <h5>{book.title}</h5>
                            <p>{book.author}</p>
                            <p>{book.pages}</p>
                        </div>
                    )
                })
            }
            <hr />
            {
                books.map(book => {
                    return <Book key={book.title} book={book} />
                })
            }
        </div>
    )
    }

export default RenderingLists