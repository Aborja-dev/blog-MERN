import Comment from '@/components/Cards/Comment'
import { type  Comment as CommentType } from '@/types'
interface Props {
    comments: CommentType[]
}
const Comments: React.FC<Props> = ({ comments }) => {
    return (
        <section className='px-6 mx-auto container space-y-6 mb-6 md:w-5/6'>
            <h1 className='text-2xl font-bold mb-6'>All Comments <span>({  comments.length })</span></h1>
            {
                comments.map((comment, index) => (
                    <Comment key={index} {...comment} />
                ))
            }
        </section>
    )
}

export default Comments
