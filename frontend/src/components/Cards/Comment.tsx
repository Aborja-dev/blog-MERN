import { icons, images } from '@/constants'

const Comment = () => {
  return (
    <article className='p-5 bg-gray-100 rounded-lg overflow-hidden flex'>
      <figure className='w-1/5'>
        <div className='bg-gray-300 p-3 box-content rounded-full w-8 h-8'>
          <img className='w-full' src={images.USER_AVATAR} alt="" />
        </div>
      </figure>
      <div className='ml-6 space-y-3'>
        <h3 className='font-bold'>Mohammad Rezaii</h3>
        <p className='text-slate-500 italic'>15 December 2020, 11:40 AM</p>
        <p className='text-slate-500 tracking-wide text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.</p>
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
      </div>
    </article>
  )
}

export default Comment
