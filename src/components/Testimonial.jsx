import Project1 from "../assets/Project1.png"

export default function Testimonial() {
    return (
        <div className="bg-indigo-800 m-20 rounded-md" id="testimonial">
            <div className='grid justify-items-center m-10'>
                <h1 className='text-3xl text-white mt-10'>Testimonial</h1>
            </div>
            <div className="flex flex-col lg:flex-row ">
                <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse ">
                    <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
                        <img
                            src={Project1}
                            className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />
                        <div className="min-w-0 py-5 pl-28 pr-5">
                            <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200 ">
                                Name Goes here
                            </div>
                            <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400 ">
                                Assistant Meneger
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse ">
                    <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
                        <img
                            src={Project1}
                            className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />
                        <div className="min-w-0 py-5 pl-28 pr-5">
                            <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200 ">
                                Name Goes here
                            </div>
                            <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400 ">
                                Assistant Meneger
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse ">
                    <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
                        <img
                            src={Project1}
                            className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />
                        <div className="min-w-0 py-5 pl-28 pr-5">
                            <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200 ">
                                Name Goes here
                            </div>
                            <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400 ">
                                Assistant Meneger
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse ">
                    <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
                        <img
                            src={Project1}
                            className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />
                        <div className="min-w-0 py-5 pl-28 pr-5">
                            <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200 ">
                                Name Goes here
                            </div>
                            <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400 ">
                                Assistant Meneger
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
