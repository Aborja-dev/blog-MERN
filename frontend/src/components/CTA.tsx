import { assets, icons } from "@/constants";
import Button from "@components/Buttons/Button";

const CTA = () => {
    return (
        <section>
            <img src={assets.WAVE} alt="" />
            <div className="w-full bg-blue-950 px-6 pt-16">
                <h2 className="font-bold text-2xl text-white leading-loose">Get our stories delivered From us to your inbox weekly.</h2>
                <form className="mt-12 space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex w-full bg-white items-center space-x-2 p-4 rounded-2xl shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] mb-3">
                        <input type="text" className="placeholder:text-slate-400 placeholder:font-bold placeholder:italic focus:outline-none" placeholder="Search article" />
                    </div>
                    <Button />
                </form>
                <p className="py-6 text-slate-500 italic">
                    <span className="font-bold text-slate-300">Get a response tomorrow </span>
                    if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
                </p>
            </div>
        </section>
    )
}

export default CTA
