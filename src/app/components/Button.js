import React from 'react'

const Button = ({onClick, text, className}) => {
  return (
    <button onClick={onClick} className={`${className} bg-slate-600 px-4 py-2 font-bold rounded-mds text-white`}>
        {text}
    </button>
  )
}

export default Button
