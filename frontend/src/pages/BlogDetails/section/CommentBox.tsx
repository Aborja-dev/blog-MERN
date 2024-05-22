import Button from '@/components/Buttons/Button'
import React from 'react'

const CommentBox = () => {
  return (
    <section className='container px-6 mx-auto py-8'>
      <form onSubmit={(e) => e.preventDefault()} className='w-full space-y-6 relative'>
        <textarea className='border-2 border-blue-600 w-full rounded-lg p-4' 
        rows={10} 
        placeholder='Leave your comment here...'>
            
        </textarea>
        <Button className='absolute bottom-6 right-3 max-w-[100px] text-xs font-send'>Send</Button>
      </form>
    </section>
  )
}

export default CommentBox
