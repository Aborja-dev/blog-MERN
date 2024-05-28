
import TextArea from '@/components/forms/TextArea'
import React from 'react'

const CommentBox = () => {

  const addCommentHandler = (value, parent=null, replyOnUser = null) => {
    const newComment = {
      _id: "10",
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: "it was a nice post, Thank you!",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2022-12-31T17:22:05.092+0000",
    }
  }
  return (
    <section className='container px-6 mx-auto py-8 md:w-5/6'>
      <TextArea btnLabel='Comment' formSubmitHandler={(text) => addCommentHandler(text)} />
    </section>
  )
}

export default CommentBox
