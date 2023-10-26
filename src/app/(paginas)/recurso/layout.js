"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
export default function Layout({children}) {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex lg:px-12 gap-5 lg:flex-row flex-col">
           <div className={`overflow-hidden w-[100%] 2xl:fixed 2xl:top-32 ${open ? 'h-[80px]' : 'h-max'} py-5  lg:w-[400px]`}>
           <div className=" items-center px-5 flex justify-between">
                <Image src={"/books.png"} width={70} height={100} />
                <h3 className="text-3xl">Recursos</h3>
                <button onClick={() => setOpen(!open)} className="text-4xl">
                    {open === true ? (
                        <AiOutlineArrowDown size={30} />
                    ): (
                        <AiOutlineArrowUp size={30} />

                    )}
                </button>
            </div>  
            <div  className="pl-10 py-5">
                <ul>
                    <li><Link className="text-2xl opacity-60 hover:opacity-100" href={""}>* Libros MINEDU</Link></li>
                    <li><Link className="text-2xl opacity-60 hover:opacity-100" href={""}>* Libros MINEDU</Link></li>
                    <li><Link className="text-2xl opacity-60 hover:opacity-100" href={""}>* Libros MINEDU</Link></li>
                    <li><Link className="text-2xl opacity-60 hover:opacity-100" href={""}>* Libros MINEDU</Link></li>
                    <li><Link className="text-2xl opacity-60 hover:opacity-100" href={""}>* Libros MINEDU</Link></li>
                    <li><Link className="text-2xl opacity-60 hover:opacity-100" href={""}>* Libros MINEDU</Link></li>
                </ul>
            </div>
           </div>
            <div className=" w-[100%] 2xl:ml-96 lg:w-[70%]">
                    {children}
            </div>
        </div>
    )
}