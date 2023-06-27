'use client'
// import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px] w-11/12 max-w-[670px]'>
        <span className='font-bold text-lg hover:underline'>{post.title}</span>
      <p className='text-sm my-1'>
        By
        <span className='italic'>{post.author}</span>
        on {" "}
            <span className='font-semibold underline cursor-pointer'>{post.category}</span>
      </p>
      <p className='text-sm'> Posted on {post.date} </p>
      <p className='mt-4 mb-2' > {post.content}</p>
      <div>
        {post.tags.map( (tag, index) => (
                <span className='text-xs font-semibold underline text-blue-700 cursor-pointer' >{`#${tag}`}</span>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
