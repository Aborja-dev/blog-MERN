import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const BaseLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='min-h-screen'>
     <Header />
        {children}
     <Footer /> 
    </div>
  )
}

export default BaseLayout