'use client'

import Button from '@/components/Button'
import React, { useState } from 'react'

const Posts = () => {

  const [form, setForm] = useState({
    title: '',
    author: '',
    body: '',
  })


  const handleChange = (e) =>{
    const id = e.target.id

    setForm({
      ...form,
      [id]: e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    const response = await fetch('/api/posts/', {
      method: 'POST',
      body: JSON.stringify(form)
    })

    const data = await response.json();
    console.log(data)
  }

  return (
    <div className='flex flex-col'>
      <label htmlFor="title">Title</label>
      <input type="text" id='title' value={form.title} onChange={handleChange}/>
      <label htmlFor="author">Author</label>
      <input type="text" id='author' value={form.author} onChange={handleChange}/>
      <label htmlFor="body">Body</label>
      <input type="text" id='body' value={form.body} onChange={handleChange}/>

      <button onClick={handleSubmit}>Submit</button>    
    </div>
  )
}

export default Posts
