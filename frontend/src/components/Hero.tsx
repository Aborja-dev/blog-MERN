import { icons } from "@/constants";

const Hero = () => {
  return (
    <section className="container py-24 px-6 space-y-6 text-center">
      <h1 className='font-bold text-3xl'>Read the most interesting articles</h1>
      <h3 className='text-slate-500 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center space-x-2 p-4 rounded-2xl shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] mb-3">
            <figure className="w-6 h-6 mx-2">
                <img src={icons.SEARCHBAR_ICON} alt="" />
            </figure>
            <input type="text" className="placeholder:text-slate-500 placeholder:font-bold placeholder:italic focus:outline-none" placeholder="Search article" />
        </div>
        <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl" type="submit">Search</button>
            <ul className="flex items-center gap-5 w-full flex-wrap mt-3 text-sm font-bold italic">
                <span className=" text-slate-500">Popular tags</span>
                <li className="text-blue-800 font-bold bg-blue-800 bg-opacity-20 py-2 px-5 rounded-md">Design</li>
                <li className="text-blue-800 font-bold bg-blue-800 bg-opacity-20 py-2 px-5 rounded-md">User Experience</li>
                <li className="text-blue-800 font-bold bg-blue-800 bg-opacity-20 py-2 px-5 rounded-md">User interface</li>
            </ul>
        
      </form>
    </section>
  )
}

export default Hero
