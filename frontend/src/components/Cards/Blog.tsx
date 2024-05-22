
import { images, icons } from '@/constants'
const BlogCard = ({className}) => {
  return (
    <article className={`
    rounded-xl overflow-hidden 
    shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] 
    space-y-3
    ${className}
    `}>
                <figure className='w-full h-40 overflow-hidden mb-3'>
                    <img src={images.CARD_IMAGE} alt="" />
                </figure>
                <div className='p-6'>
                    <h3 className='text-2xl font-bold text-blue-950'>Future of Work </h3>
                    <p className='text-slate-500 text-sm md:text-base lg:text-lg'>Majority of peole will work in jobs that don’t exist today.</p>
                    <div className='flex justify-between items-center mt-6'>
                        <div className='flex gap-3 items-center'>
                            <figure className='w-8 h-8 rounded-full overflow-hidden'>
                                <img src={images.USER_AVATAR} alt="" />
                            </figure>
                            <div>
                                <p className='font-bold italic text-blue-900 lg:text-sm'>Viola Manisa</p>
                                <p className='flex items-center gap-1 text-slate-500 italic lg:text-sm'>
                                    <span className='inline-block w-8 h-8 lg:w-4 lg:h-4'>
                                        <img src={icons.VERIFIED} alt="" />
                                    </span>
                                    Verified writer
                                </p>
                            </div>
                        </div>
                        <p className='text-sm font-bold italic text-slate-500'>02 May</p>
                    </div>
                </div>
            </article>
  )
}

export default BlogCard
