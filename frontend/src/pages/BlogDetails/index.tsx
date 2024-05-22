import BaseLayout from '@/components/layouts/BaseLayout'
import Aside from '@/pages/BlogDetails/section/Aside'
import BreadCrumb from '@/pages/BlogDetails/section/BreadCrumb'
import CommentBox from '@/pages/BlogDetails/section/CommentBox'
import Comments from '@/pages/BlogDetails/section/Comments'
import Content from '@/pages/BlogDetails/section/Content'
import React from 'react'

const BlogDetailsPage = () => {
  return (
    <BaseLayout>
      <div className='lg:flex'>
        <div className='lg:w-4/6'>
          <BreadCrumb />
          <Content />
          <CommentBox />
          <Comments />
        </div>
        <div className='lg:w-2/6'>
          <Aside />
        </div>

      </div>
    </BaseLayout>
  )
}

export default BlogDetailsPage
