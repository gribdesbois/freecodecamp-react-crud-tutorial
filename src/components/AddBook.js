import React from 'react'
import BookForm from './BookForm'

const AddBook = ({ history, books, setBooks }) => {
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
