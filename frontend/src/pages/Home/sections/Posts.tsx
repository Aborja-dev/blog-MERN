import BlogCard from '@components/Cards/Blog'
import Button from '@components/Buttons/Button'
import { icons } from '@/constants'
import React from 'react'
import { Post } from '@/types'
const Posts: React.FC<{posts: Post[]}> = ({posts}) => {
    return (
        <section>
            <div className='container p-6 grid grid-cols-6 gap-6 lg:w-10/12 lg:mx-auto'>
                {
                    posts.map((post, index) => (
                        <BlogCard key={index} className="col-span-6 md:col-span-3 lg:col-span-2" {...post} />
                    ))
                }
            </div>
            <div className='flex w-full mt-8 justify-center'>
                <Button outline className='max-w-[250px] group'>
                    <div className='flex items-center justify-center gap-2'>
                        <p>Load More</p>
                        <img src={icons.ARROW_ICON} className='w-4 h-4 group-hover:translate-x-2 transition-transform duration-300' alt="" />
                    </div>
                </Button>
            </div>
        </section>
    )
}

export default Posts
