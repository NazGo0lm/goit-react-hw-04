//import React from 'react'

import { useState } from "react"
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const setSubmit = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) {
      toast.error('This is an error!');
    }
    onSubmit(inputValue);
    setInputValue('')

  } 

  return (
    <div>
      <header>
        <form onSubmit={setSubmit}>
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>

    </div>
  )
}

export default SearchBar
