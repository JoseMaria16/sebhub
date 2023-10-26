"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className='flex fixed top-0 bg-white z-10 w-full items-center  justify-between px-5 2xl:px-14'>
    <div className='flex gap-20 items-center'>
      <Link href={"/"} className='my-3'>
        <h2 className='text-4xl text-primary'>Sebastián</h2>
        <h2 className='text-3xl text-red-600'>Barranca</h2>
      </Link>
      <div>
        <nav className={`flex flex-col fixed  transition-all duration-500 xl:hidden bg-white w-[60%] h-screen ${open ? ' left-[0px]' : 'left-[-1000px]'} top-0`}>
          <button className='text-4xl flex p-5' onClick={() => setOpen(false)}>X</button>
          <ul className='flex flex-col gap-5 lg:gap-12 pl-5'>
          <li className='cursor-pointer'>
              <Link href={"/"} className='nav relative text-2xl font-medium'>Inicio </Link>
          </li>
            <li className='cursor-pointer'>
              <Link href={"/recurso/libros"} className='nav relative text-2xl font-medium'>Biblioteca </Link>
          </li>
          <li className='cursor-pointer'>
              <h1 className='nav relative text-xl font-medium'>Logros 2023</h1>
          </li>
          <li className='cursor-pointer'>
              <h1 className='nav relative text-xl font-medium'>Emprendimientos</h1>
          </li>
          <li className='cursor-pointer'>
              <h1 className='nav relative text-xl font-medium'>Descargar </h1>
          </li>
          </ul>
        </nav>
        <nav className='hidden xl:flex '>
          <ul className='flex  gap-12'>
            <li className='cursor-pointer'>
              <Link href={"/recurso/libros"} className='nav relative text-2xl font-medium'>Recursos</Link>
          </li>
          <li className='cursor-pointer'>
              <h1 className='nav relative text-xl font-medium'>Noticias</h1>
          </li>
          <li className='cursor-pointer'>
              <Link  href={"/emprendimientos"} className='nav relative text-xl font-medium'>Emprendimientos</Link>
          </li>
          <li className='cursor-pointer'>
              <h1 className='nav relative text-xl font-medium'>Descargar </h1>
          </li>
          </ul>
        </nav>
      </div>
    </div>

   
    <div className='flex xl:hidden '>
    <div className='hidden lg:flex gap-0'>
      <Link className='bg-[#303ebc] px-5 font-semibold py-2 text-lg text-white rounded-lg' href={""}>Facebook</Link>
      <Link className='px-5 py-2 text-lg rounded-lg' href={""}>Apoya al creador</Link>
    </div>
      <button onClick={() => setOpen(true)} className='text-2xl'>
        <HiOutlineMenuAlt3 size={30} />
      </button>
    </div>
  </header>
  )
}

export default Header