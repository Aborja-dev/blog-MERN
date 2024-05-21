import { icons } from "@/constants";
import Button from "@components/Buttons/Button";

const SeaarchBar = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} 
    className={`
    md:flex md:bg-white md:items-center md:rounded-md md:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]`}>
        <div className={`
        flex items-center flex-grow
        space-x-2 p-4 mb-3
        rounded-2xl shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] 
        md:mb-0 md:rounded-none md:bg-transparent md:shadow-none`}>
            <figure className="w-6 h-6 mx-2">
                <img src={icons.SEARCHBAR_ICON} alt="" />
            </figure>
            <input type="text" 
            className={`
            placeholder:text-slate-500 placeholder:font-bold placeholder:italic 
            focus:outline-none 
            md:bg-transparent md:w-full`} 
            placeholder="Search article" />
        </div>
        <Button className="md:w-auto md:px-8 md:mr-4"> Search</Button>
      </form>
    
  )
}

export default SeaarchBar
