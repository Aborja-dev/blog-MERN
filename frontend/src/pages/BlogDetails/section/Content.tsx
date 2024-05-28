import { images } from '@/constants'
import { PostDetails } from '@/types'
// todo cambiar category en un link
const Content: React.FC<PostDetails> = ({
    title,
    urlCover: Image,
    content,
    categories
}) => {
    return (
        <section className='px-6 container mx-auto md:w-5/6'>
            <article className='w-full space-y-4 text-slate-500 py-6'>
                <figure className='w-full rounded-lg overflow-hidden '>
                    <img className='w-full' src={Image ?? images.CARD_IMAGE} alt="" />
                </figure>
                <div>
                    <ul className='flex gap-2 text-base text-blue-400 blog-tags font-semibold '>
                        {
                            categories?.map((category, index) => (
                                <li key={index}>{category}</li>
                            ))
                        }
                    </ul>
                </div>
                <h3 className='text-3xl tracking-wide font-bold text-slate-700'>{title}</h3>
                <p className='lg:text-lg'>{content}</p>                
            </article>
        </section>
    )
}

export default Content
