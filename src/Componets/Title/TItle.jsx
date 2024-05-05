// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Title.css'

function Title({SubTitle , Title}) {
  return (
    <div className='Title'>
        <p>{SubTitle}</p>
        <h1>{Title}</h1>
    </div>
  )
}


export default Title
