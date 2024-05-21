import SeaarchBar from "@components/SeaarchBar"
import Badge from "@components/Badge"
import Button from "@components/Buttons/Button"


const Hero = () => {
  return (
    <section className="container py-24 px-6 space-y-6 text-center">
      <h1 className='font-bold text-3xl'>Read the most interesting articles</h1>
      <h3 className='text-slate-500 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <SeaarchBar />
        <Button> Search</Button>
            <ul className="flex items-center gap-5 w-full flex-wrap mt-3 text-sm font-bold italic">
                <span className=" text-slate-500">Popular tags</span>
                <Badge>Design</Badge>
                <Badge>Development</Badge>
                <Badge>Business</Badge>
            </ul>
        
      </form>
    </section>
  )
}

export default Hero
