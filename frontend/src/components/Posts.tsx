import BlogCard from '@components/Cards/Blog'

const Posts = () => {
    return (
        <div className='container p-6 grid grid-cols-6 gap-6 lg:w-10/12 lg:mx-auto'>
            <BlogCard className={"col-span-6 md:col-span-3 lg:col-span-2"} />
            <BlogCard className={"col-span-6 md:col-span-3 lg:col-span-2"} />
            <BlogCard className={"col-span-6 md:col-span-3 lg:col-span-2"} />
            <BlogCard className={"col-span-6 md:col-span-3 lg:col-span-2"} />
            <BlogCard className={"col-span-6 md:col-span-3 lg:col-span-2"} />
            <BlogCard className={"col-span-6 md:col-span-3 lg:col-span-2"} />
        </div>
    )
}

export default Posts
