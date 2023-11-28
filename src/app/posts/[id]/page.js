import React from 'react'
import Post from '../../../components/Post'


const Posts = ({params}) => {
  return (
    <div>
      Post {params.id}
    </div>
  )
}

export default Posts
