import BlogCard from '@components/Cards/Blog'

const Posts = () => {
    return (
        <div className='container p-6 grid grid-cols-6 gap-6'>
            <BlogCard className={"col-span-6 md:col-span-3"} />
            <BlogCard className={"col-span-6 md:col-span-3"} />
            <BlogCard className={"col-span-6 md:col-span-3"} />
            <BlogCard className={"col-span-6 md:col-span-3"} />
        </div>
    )
}

export default Posts
