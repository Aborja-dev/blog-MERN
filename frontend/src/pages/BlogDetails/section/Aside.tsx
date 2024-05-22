import AsideCard from "@/components/Cards/Aside"

const Aside = () => {
  return (
    <section className='container mx-auto px-6 md:w-5/6 lg:pt-[96px]'>
    <aside className='p-4 rounded-lg mb-4 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] bg-white'>
    <h2 className='text-lg font-bold mb-5 opacity-70'>Latest Article</h2>
    <div className="grid grid-cols-2 gap-y-6">
        <AsideCard className="col-span-2 md:col-span-1 lg:col-span-2" />
        <AsideCard className="col-span-2 md:col-span-1 lg:col-span-2" />
        <AsideCard className="col-span-2 md:col-span-1 lg:col-span-2" />    
    </div>
    </aside>
    </section>
  )
}

export default Aside
