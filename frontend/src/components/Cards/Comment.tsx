import { icons, images } from '@/constants'
import { type Comment } from '@/types'

const Comment: React.FC<Comment> = ({author, comment, created_at, children, isChildren = false}) => {
  return (
    <article className={`${!isChildren ? 'p-5' : 'p-5 pb-0 pl-0'}  bg-gray-100 rounded-lg overflow-hidden flex`}>
      <figure className='w-1/5'>
        <div className='bg-gray-300 p-3 box-content rounded-full w-8 h-8'>
          <img className='w-full' src={images.USER_AVATAR} alt="" />
        </div>
      </figure>
      <div className='ml-6 space-y-3'>
        <h3 className='font-bold'>{author}</h3>
        <p className='text-slate-500 italic'>{created_at}</p>
        <p className='text-slate-500 tracking-wide text-sm'>{comment}</p>
        <div className='flex gap-3 text-sm font-semibold text-slate-500'>
          <div className='flex items-center gap-1'>
            <img className='w-3 h-3' src={icons.COMMENT.REPLY} alt="" />
            <span>Reply</span>
          </div>
          <div className='flex items-center gap-1'>
            <img className='w-3 h-3' src={icons.COMMENT.EDIT} alt="" />
            <span>Edit</span>
          </div>
          <div className='flex items-center gap-1'>
            <img className='w-3 h-3' src={icons.COMMENT.DELETE} alt="" />
            <span>Delete</span>
          </div>
        </div>
        {
          children?.length > 0 && (
            children?.map((comment, index) => (
              <Comment key={index} {...comment} isChildren />
          ))
          )
        }
      </div>
    </article>
  )
}

export default Comment
