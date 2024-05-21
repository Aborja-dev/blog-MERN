import { assets } from "@/constants";
import Button from "@components/Buttons/Button";
import Field from "@components/Field";

const CTA = () => {
    return (
        <section>
            <img src={assets.WAVE} alt="" />
            <div className="w-full bg-blue-950 px-6 pt-16">
                <h2 className="font-bold text-2xl text-white leading-loose">Get our stories delivered From us to your inbox weekly.</h2>
                <form className="mt-12 space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <Field />
                    <Button>Get Started</Button>
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
