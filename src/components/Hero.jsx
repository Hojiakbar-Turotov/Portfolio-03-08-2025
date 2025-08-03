import { BsFacebook,  BsInstagram, BsTelephone, BsTelegram } from "react-icons/bs"
import HeroPic from "../assets/girl.jpg"

export const Hero = () => {
    return (
        <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row sm:flex-col sm:space-y-10 text-white">
            <div className="lg:w-1/3 sm:w-fit">
                <p className="text-4xl mb-5 text-slate-300">I'm</p>
                <h1 className="text-6xl ">Hojiakbar Turatov</h1>
                <hr />
                <p className="mt-10 text-xl text-slate-300 font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore adipisci debitis vel quidem amet quod quas modi unde accusantium dolor commodi voluptate consequuntur quos blanditiis, placeat nesciunt incidunt culpa autem. Dolor cupiditate eos necessitatibus iste soluta labore eius.
                </p>
            </div>
            <div className="w-1/3 items-center sm:w-fit">
                <img src={HeroPic} alt="" width={250} height={250} className="rounded-full w-full border-8 border-white" />
            </div>
            <div className="w-1/3 sm:w-fit">
                <p className="text-4xl mb-4">About Me</p>
                <p className="text-slate-300">
                    Let's build quality in programming ad design with our services
                </p>
                <button className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white cursor-pointer">
                    Show More ...
                </button>
                <div className="flex mt-5 space-x-4 cursor-pointer ">
                    <BsFacebook size={50} className="p-1 border-4 hover:border-indigo-800 rounded-full" />
                    <BsInstagram size={50} className="p-1 border-4 hover:border-indigo-800 rounded-full"/>
                    <BsTelephone size={50} className="p-1 border-4 hover:border-indigo-800 rounded-full"/>
                    <a href="https://t.me/hojiakbar_frondEnd">
                        <BsTelegram size={50} className="p-1 border-4 hover:border-indigo-800 rounded-full"/>
                    </a>
                </div>
            </div>
        </section>
    )
}
