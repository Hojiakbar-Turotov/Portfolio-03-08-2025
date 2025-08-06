import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgNametag } from "react-icons/cg";
import { HiMenuAlt1 } from "react-icons/hi";

export const Nav = () => {

    const [toggle, setToggle] = useState(false);

    function openMenu() {
        setToggle(true)
    }

    function closeMenu() {
        setToggle(false)
    }

    return (
        <>
            <div className="flex items-center justify-between p-10 lg:flex-row">
                <div>
                    <a href="#" className="text-white font-mono text-3xl tracking-wider flex items-center"><CgNametag /> HOJIAKBAR</a>
                </div>
                <div className="space-x-4">
                    <div className="hidden lg:block space-x-2">
                        <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
                        <a href="#project" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</a>
                        <a href="#testimonial" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Testimonials</a>
                    </div>
                    <div className="sm:block lg:hidden">
                        {toggle ? (
                            <AiOutlineClose onClick={closeMenu} size={30} className="text-white cursor-pointer" />
                        ) : (<HiMenuAlt1 onClick={openMenu} size={30} className="text-white cursor-pointer" />)}

                    </div>
                </div>
            </div>
            <div className="sm:block lg:hidden">
                {toggle ? (
                    <div className="flex justify-between ml-10">
                        <ul>
                            <li className="text-white mb-2 text-xl cursor-pointer"><a href="#">Skills</a></li>
                            <li className="text-white mb-2 text-xl cursor-pointer"><a href="#project">Projects</a></li>
                            <li className="text-white mb-2 text-xl cursor-pointer"><a href="testimonial">Testimonials</a></li>
                        </ul>
                    </div>
                ) : (<></>)}
            </div>
        </>
    )
}
