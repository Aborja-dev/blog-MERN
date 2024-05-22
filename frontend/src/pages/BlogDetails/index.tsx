import BaseLayout from '@/components/layouts/BaseLayout'
import BreadCrumb from '@/pages/BlogDetails/section/BreadCrumb'
import Content from '@/pages/BlogDetails/section/Content'
import React from 'react'

const BlogDetailsPage = () => {
  return (
    <BaseLayout>
      <BreadCrumb />
      <Content />
    </BaseLayout>
  )
}

export default BlogDetailsPage
