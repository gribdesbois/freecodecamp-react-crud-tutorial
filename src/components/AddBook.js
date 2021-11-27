import React, { useContext } from 'react'
import BooksContext from '../context/BooksContext'
import BookForm from './BookForm'

const AddBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext)
  const handleOnSubmit = (book) => {
    setBooks([book, ...books])
    history.push('/')
  }
  return (
    <>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </>
  )
}
export default AddBook
