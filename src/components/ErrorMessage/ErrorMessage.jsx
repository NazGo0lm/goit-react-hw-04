//import React from 'react'

import toast from "react-hot-toast";

const ErrorMessage = () => {
   toast.error("There is no matches to yout request. Try again!");
  return (
    <div>
      <p>sorry, error message</p>
    </div>
  )
}

export default ErrorMessage
