import React from 'react'

function Header({handleToggleDarkMode}) {
  return (
    <header className='header'>
        <h1>Notes</h1>
        <button onClick={() => handleToggleDarkMode((preDarkMode) => !preDarkMode)} className='save'>Toggle Mode</button>
    </header>
  )
}

export default Header