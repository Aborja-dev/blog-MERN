import { images, icons } from '@/constants'
import BlogCard from '@components/Cards/Blog'
import React from 'react'

const Posts = () => {
    return (
        <div className='container p-6 grid grid-cols-6 gap-y-6'>
            <BlogCard className={"col-span-6"} />
            <BlogCard className={"col-span-6"} />
            <BlogCard className={"col-span-6"} />
        </div>
    )
}

export default Posts
