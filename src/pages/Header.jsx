import React from 'react'
import { useState } from 'react';
import {NavLink} from 'react-router-dom';





const Header = () => {
        let Links = [
            {name:"Home", link:"/portfolio"},
            {name:"Profile", link:"/profile"},
            {name:"Experience", link:"/experience"},
        ];
        let [open,setOpen]=useState(false);

        const activeLink = 'underline underline-offset-8 decoration-slate-400 cursor-default';
        const normalLink = '';



    return (
        <div>
            {/* start header */}

            <div className="w-full h-[64px] fixed top-0 left-0 z-40 bg-white">
                <div className='md:flex items-center shadow-md justify-between py-4 md:px-10 px-7 font-secondary text-slate-900'>

                    <div className='text-lg flex items-center text-slate-700 font-bold cursor-default'>
                        <h1>Rifqifam</h1>
                    </div>

                    <div onClick={()=>setOpen(!open)} className="text-2xl absolute right-8 top-5 pb-3 cursor-pointer md:hidden">
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>

                    <ul className={`md:flex shadow-md md:shadow-none md:items-center md:pb-0 pb-7 absolute md:static bg-white md:z-40 z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 md:pt-0 pt-4 transition-all duration-200 ease-in ${open ? 'opacity-100':'opacity-0'} md:opacity-100`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className="ml-4 md:ml-8 md:my-0 my-4 px-1 py-1">
                                    <NavLink to={link.link} className={({isActive}) => isActive ? activeLink: normalLink} ><p title>{link.name}</p></NavLink>
                                </li>
                            ))
                        }
                    <button 
                         className='bg-white text-slate-700 font-secondary py-1 px-5 rounded-lg hover:md:ml-8 border-[1px] border-white hover:border-slate-200 hover:shadow-lg
                        duration-500 font-bold'>
                        <a href='portfolio/contact-Me'>Contact Me</a>
                    </button>

                    </ul>

                </div>
            </div>
        </div>
        
    )
}

export default Header;