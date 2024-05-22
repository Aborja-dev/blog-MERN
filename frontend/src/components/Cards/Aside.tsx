import { images } from '@/constants'
import { Component } from '@/types'
import React from 'react'

const AsideCard:React.FC<Component> = ({className}) => {
  return (
    <article className={`flex gap-5 py-2 ${className}`}>
        <figure className='w-1/3 h-auto rounded-2xl overflow-hidden'>
            <img src={images.CARD_IMAGE} alt="" />
        </figure>
        <div className='space-y-3'>
            <h3 className='font-semibold text-slate-800'>Help children get better education</h3>
            <p className='font-light italic text-sm text-slate-500'>Jun 27, 2022</p>
        </div>
    </article>
  )
}

export default AsideCard
