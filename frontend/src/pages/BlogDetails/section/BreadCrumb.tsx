import React from 'react'

const BreadCrumb = () => {
  return (
    <section className="container mx-auto p-6 md:w-5/6">
        <ul className="flex gap-2 text-sm text-slate-400 z-5 lg:text-lg">
          <li className="breadcrumb-item">
            Home
          </li>
          <li className="breadcrumb-item">
            Blog
          </li>
          <li className="breadcrumb-item">
            Article
          </li>
        </ul>
      </section>
  )
}

export default BreadCrumb
