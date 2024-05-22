import { images } from '@/constants'

const Content = () => {
    return (
        <section className='px-6 container mx-auto md:w-5/6'>
            <article className='w-full space-y-4 text-slate-500 py-6'>
                <figure className='w-full rounded-lg overflow-hidden '>
                    <img className='w-full' src={images.CARD_IMAGE} alt="" />
                </figure>
                <div>
                    <ul className='flex gap-2 text-base text-blue-400 blog-tags font-semibold '>
                        <li>Educational</li>
                        <li>Tech</li>
                    </ul>
                </div>
                <h3 className='text-3xl tracking-wide font-bold text-slate-700'>Help children get better education</h3>
                <p className='lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.</p>
                <p className='lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus</p>
                <p className='lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus</p>
            </article>
        </section>
    )
}

export default Content
