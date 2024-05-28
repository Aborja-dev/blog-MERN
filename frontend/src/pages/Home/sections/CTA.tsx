import { assets } from "@/constants";
import Button from "@components/Buttons/Button";
import Field from "@/components/shared/Field";
import CTACard from "@/components/Cards/CTACard";

const CTA = () => {
    return (
        <section>
            <img src={assets.WAVE} alt="" />
            <div className="w-full bg-blue-950 lg:py-12">
                <div className="lg:flex lg:w-10/12 lg:mx-auto">
                    <div className="hidden lg:w-1/2 lg:flex lg:justify-center lg:order-last">
                        <CTACard />
                    </div>
                    <div className=" px-6 pt-16 md:w-10/12 md:mx-auto lg:w-1/2">
                        <h2 className="font-bold text-2xl md:text-4xl text-white leading-loose">Get our stories delivered From us to your inbox weekly.</h2>
                        <form className="mt-12 space-y-3 md:space-y-0 md:flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <Field />
                            <Button className="md:w-2/4">Get Started</Button>
                        </form>
                        <p className="py-6 text-slate-500 italic">
                            <span className="font-bold text-slate-300">Get a response tomorrow </span>
                            if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CTA
