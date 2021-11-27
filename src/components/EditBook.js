import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BooksContext from '../context/BooksContext'
import BookForm from './BookForm'

const EditBook = ({ history }) => {
  const { id } = useParams()
  const { books, setBooks } = useContext(BooksContext)
  const bookToEdit = books.find((book) => book.id !== id)

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((oldBook) => oldBook.id !== id)
    setBooks([book, ...filteredBooks])
    history.push('/')
  }

  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  )
}
export default EditBook
