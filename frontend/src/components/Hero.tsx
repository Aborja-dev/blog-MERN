import SeaarchBar from "@components/SeaarchBar"
import Badge from "@components/Badge"


const Hero = () => {
  return (
    <section className="container py-24 px-6 space-y-6 text-center w-10/12 mx-auto ">
      <h1 className='font-bold text-3xl md:text-5xl'>Read the most interesting articles</h1>
      <h3 className='text-slate-500 md:text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
        <SeaarchBar />
      <ul className="flex items-center gap-5 w-full flex-wrap mt-3 text-sm font-bold italic">
        <span className=" text-slate-500">Popular tags</span>
        <Badge>Design</Badge>
        <Badge>Development</Badge>
        <Badge>Business</Badge>
      </ul>
    </section>
  )
}

export default Hero
