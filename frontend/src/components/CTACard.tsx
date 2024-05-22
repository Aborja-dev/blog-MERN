import { images } from '@/constants'

const CTACard = () => {
  return (
    <div className='relative'>
      <div className='w-[200px] h-[200px] bg-[#FC5A5A] absolute top-[42px] -right-[50px] z-5'></div>
      <div className='w-[250px] h-[250px] bg-[#fff] opacity-20 absolute rounded-lg bottom-[-42px] left-[-61px]'></div>
      <article className={`
    rounded-xl  bg-white max-w-[400px]
    shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] 
    space-y-3 p-4
    relative
    `}>
        <figure className='w-full h-40 overflow-hidden mb-3'>
          <img src={images.CTA_IMAGE} alt="" />
        </figure>
        <div className='p-8'>
          <h3 className='text-2xl font-bold text-blue-950'>Future of Work </h3>
          <p className='text-slate-500 text-sm'>Majority of peole will work in jobs that don’t exist today.</p>
        </div>
        
      </article>
    </div>

  )
}

export default CTACard
