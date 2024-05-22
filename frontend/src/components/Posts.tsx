import BlogCard from '@components/Cards/Blog'
import Button from '@components/Buttons/Button'
import { icons } from '@/constants'
const Posts = () => {
    return (
        <section>
            <div className='container p-6 grid grid-cols-6 gap-6 lg:w-10/12 lg:mx-auto'>
                <BlogCard className={"col-span-6 md:col-span-3 lg:col-span-2"} />
                <BlogCard className={"col-span-6 md:col-span-3 lg:col-span-2"} />
                <BlogCard className={"col-span-6 md:col-span-3 lg:col-span-2"} />
                <BlogCard className={"col-span-6 md:col-span-3 lg:col-span-2"} />
                <BlogCard className={"col-span-6 md:col-span-3 lg:col-span-2"} />
                <BlogCard className={"col-span-6 md:col-span-3 lg:col-span-2"} />
            </div>
            <div className='flex w-full mt-8 justify-center'>
                <Button outline className='max-w-[250px]'>
                    <div className='flex items-center justify-center gap-2'>
                        <p>Load More</p>
                        <img src={icons.ARROW_ICON} className='w-4 h-4' alt="" />
                    </div>
                </Button>
            </div>
        </section>
    )
}

export default Posts
