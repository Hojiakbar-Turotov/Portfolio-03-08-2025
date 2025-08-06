import Project1 from "../assets/Project1.png"
export default function Project() {
    return (
        <>
            <div className='bg-indigo-800 m-5 md:m-20 max-w-full' id="project">
                <div className='grid justify-items-center m-10'>
                    <h1 className='text-3xl text-white mt-10'>Projects</h1>
                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-5'>
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                            <div className="md:flex">
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                        Hospital Managment System
                                    </div>
                                    <a href="#">Subheading</a>
                                    <p className="mt-2 text-slate-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias corporis ratione?</p>
                                </div>
                                <div className="md:shrink-0 p-5">
                                    <img src={Project1} alt="Project1" width={150} height={150} />
                                </div>
                            </div>
                        </div>
                    <hr className="md:hidden"/>
                        <div className="max-w-md mx-auto mt-2 md:mt-0 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                            <div className="md:flex">
                                <div className="md:shrink-0 p-5">
                                    <img src={Project1} alt="Project1" width={150} height={150} />
                                </div>
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                        Hospital Managment System
                                    </div>
                                    <a href="#">Subheading</a>
                                    <p className="mt-2 text-slate-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias corporis ratione?</p>
                                </div>
                            </div>
                        </div>
                    <hr className="md:hidden"/>
                    </div>
                    <hr className="hidden md:block" />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-5'>
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                            <div className="md:flex">
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                        Hospital Managment System
                                    </div>
                                    <a href="#">Subheading</a>
                                    <p className="mt-2 text-slate-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias corporis ratione?</p>
                                </div>
                                <div className="md:shrink-0 p-5">
                                    <img src={Project1} alt="Project1" width={150} height={150} />
                                </div>
                            </div>
                        </div>
                    <hr className="md:hidden"/>
                        <div className="max-w-md mx-auto mt-2 md:mt-0 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                            <div className="md:flex">
                                <div className="md:shrink-0 p-5">
                                    <img src={Project1} alt="Project1" width={150} height={150} />
                                </div>
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                        Hospital Managment System
                                    </div>
                                    <a href="#">Subheading</a>
                                    <p className="mt-2 text-slate-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias corporis ratione?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
