import { icons } from "@/constants";

const Footer = () => {
    return (
        <footer className="container py-24 bg-blue-950 px-6 space-y-6">
            <div className='grid grid-cols-2 gap-y-10'>
                <ul className='col-span-1 text-sm text-slate-500 space-y-6'>
                    <h3 className='font-bold text-slate-300'>Product</h3>
                    <li>Landingpage</li>
                    <li>Features</li>
                    <li>Documentation</li>
                    <li>Referral Program</li>
                    <li>Pricing</li>
                </ul>
                <ul className='col-span-1 text-sm text-slate-500 space-y-6'>
                    <h3 className='font-bold text-slate-300'>Services</h3>
                    <li>Documentation</li>
                    <li>Design</li>
                    <li>Themes</li>
                    <li>Illustrations</li>
                    <li>UI Kit</li>
                </ul>
                <ul className='col-span-1 text-sm text-slate-500 space-y-6'>
                    <h3 className='font-bold text-slate-300'>Company</h3>
                    <li>About</li>
                    <li>Terms</li>
                    <li>Privacy Policy</li>
                    <li>Careers</li>
                </ul>
                <ul className='col-span-1 text-sm text-slate-500 space-y-6'>
                    <h3 className='font-bold text-slate-300'>More</h3>
                    <li>Documentation</li>
                    <li>License</li>
                    <li>Changelog</li>
                </ul>
            </div>
            <div className="flex flex-col items-center w-full gap-6 px-6">
                <figure className="w-12 h-12">
                    <img src={icons.LOGO}  alt="" />
                </figure>
                    <p className="text-slate-500 text-center">Build a modern and creative website with crealand</p>
                    <ul className="mt-6 flex w-full justify-center gap-4">
                        <li className="w-8 h-8"><img src={icons.SOCIAL.LINKEDIN} alt="" /></li>
                        <li className="w-8 h-8"><img src={icons.SOCIAL.TWITTER} alt="" /></li>
                        <li className="w-8 h-8"><img src={icons.SOCIAL.GITHUB} alt="" /></li>
                        <li className="w-8 h-8"><img src={icons.SOCIAL.DISCORD} alt="" /></li>
                        <li className="w-8 h-8"><img src={icons.SOCIAL.FACEBOOK} alt="" /></li>
                    </ul>
            </div>
        </footer>
    )
}

export default Footer
