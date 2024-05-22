import Comment from '@/components/Cards/Comment'

const Comments = () => {
    return (
        <section className='px-6 mx-auto container space-y-6 mb-6 md:w-5/6'>
            <h1 className='text-2xl font-bold mb-6'>All Comments <span>(3)</span></h1>
            <Comment />
            <Comment />
            <Comment />
        </section>
    )
}

export default Comments
