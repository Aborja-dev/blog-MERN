import SeaarchBar from "@components/SeaarchBar"
import Badge from "@/components/shared/Badge"
import { assets } from "@/constants";


const Hero = () => {
  return (
    <section className="container py-24 px-6 space-y-6 text-center md:w-10/12 md:mx-auto lg:flex">
      <div className="hidden lg:block lg:order-last lg:ml-6">
        <figure className="w-full">
          <img src={assets.HERO_IMAGE} alt="" />
        </figure>
      </div>
      <div className="lg:space-y-6">
        <h1 className='font-bold text-3xl md:text-5xl'>Read the most interesting articles</h1>
        <h3 className='text-slate-500 md:text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
        <SeaarchBar />
        <ul className="flex items-center gap-5 w-full flex-wrap mt-3 text-sm font-bold italic">
          <span className=" text-slate-500">Popular tags</span>
          <Badge>Design</Badge>
          <Badge>Development</Badge>
          <Badge>Business</Badge>
        </ul>
      </div>
    </section>
  )
}

export default Hero
