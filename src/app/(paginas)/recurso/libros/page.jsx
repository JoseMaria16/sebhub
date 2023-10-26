"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const libros = [
  // {
  //   id: 1,
  //   img: "/libro1.png",
  //   category: "Matematica",
  //   title: "Mat. 1er grado de secundaria ",
  //   pages: "",
  //   grado: '1er Grado',
  //   url: "",
  // },
  // {
  //   id: 2,
  //   img: "/libro1.png",
  //   category: "Matematica",
  //   title: "Mat. 1er grado de secundaria ",
  //   pages: "",
  //   grado: '2do Grado',
  //   url: "",
  // },
  // {
  //   id: 3,
  //   img: "/libro1.png",
  //   category: "Matematica",
  //   title: "Mat. 1er grado de secundaria ",
  //   pages: "",
  //   grado: '3er Grado',
  //   url: ""
  // },
  // {
  //   id: 4,
  //   img: "/libro1.png",
  //   category: "Matematica",
  //   title: "Mat. 1er grado de secundaria ",
  //   pages: "",
  //   grado: '4to Grado',
  //   url: "",
  // },
  // {
  //   id: 5,
  //   img: "/libro1.png",
  //   category: "Matematica",
  //   title: "Mat. 1er grado de secundaria ",
  //   pages: "",
  //   grado: '5to Grado',
  //   url: "",
  // },
  {
    id: 6,
    img: "/libros/cyt/1.png",
    category: "Ciencia y Tec.",
    title: "Mat. 1er grado de secundaria ",
    pages: "",
    grado: '1er Grado',
    url: "",
  },
  {
    id: 7,
    img: "/libros/cyt/2.png",
    category: "Ciencia y Tec.",
    title: "Mat. 1er grado de secundaria ",
    pages: "",
    grado: '2do Grado',
    url: "",
  },
  {
    id: 8,
    img: "/libros/cyt/3.png",
    category: "Ciencia y Tec.",
    title: "Mat. 1er grado de secundaria ",
    pages: "",
    grado: '3ro Grado',
    url: "",
  },
  {
    id: 9,
    img: "/libros/cyt/4.png",
    category: "Ciencia y Tec.",
    title: "Mat. 1er grado de secundaria ",
    pages: "",
    grado: '4to Grado',
    url: "",
  },
  {
    id: 10,
    img: "/libros/cyt/5.png",
    category: "Ciencia y Tec.",
    title: "Mat. 1er grado de secundaria ",
    pages: "",
    grado: '5to Grado',
    url: "",
  },
  
  {
    id: 11,
    img: "/libros/cyt/5.png",
    category: "Ciencias S.",
    title: "Mat. 1er grado de secundaria ",
    pages: "",
    grado: '5to Grado',
    url: "",
  },
  {
    id: 12,
    img: "/libros/cyt/5.png",
    category: "Ciencias S.",
    title: "Mat. 1er grado de secundaria ",
    pages: "",
    grado: '5to Grado',
    url: "",
  },
  {
    id: 13,
    img: "/libros/cyt/5.png",
    category: "Ciencias S.",
    title: "Mat. 1er grado de secundaria ",
    pages: "",
    grado: '5to Grado',
    url: "",
  },
  {
    id: 14,
    img: "/libros/cyt/5.png",
    category: "Ciencias S.",
    title: "Mat. 1er grado de secundaria ",
    pages: "",
    grado: '5to Grado',
    url: "",
  },
  {
    id: 15,
    img: "/libros/cyt/5.png",
    category: "Ciencias S.",
    title: "Mat. 1er grado de secundaria ",
    pages: "",
    grado: '5to Grado',
    url: "",
  },
]

function page() {
  const allCategories = ['Todas', ...new Set(libros.map(article => article.category))]
  const [categories, setCategories] = useState(allCategories)
  const [articles, setArticles] = useState(libros)
  const filterCategory = (category) => {
    if (category === 'Todas') {
      setArticles(libros)
      return
    }

    const filteredData = libros.filter(article => article.category === category);
    setArticles(filteredData)
  }
  console.log(categories);
  return (
    <div className=' w-[100%] -mt-5 lg:mt-10 px-5  pb-10  '>
      <div className='flex  w-full justify-between'>
        <div>
          <h3 className=' text-6xl md:text-8xl font-bold'>Libros</h3>
          <p className=' text-xl md:text-2xl w-full px-0 lg:w-[30ch] text-gray-600'>Mejora tus conocimientos con los libros de nuestra biblioteca.</p>
        </div>
        <div>
          <Image alt='' src={"/alex.png"} width={70} className='mr-10 hidden md:flex lg:hidden xl:flex' height={50} />
        </div>
      </div>
      <div className='flex flex-wrap gap-4 w-full my-5 lg:w-[70%]'>
        {categories.map((category, i) => (
          <button
            onClick={() => filterCategory(category)} key={i}
            className={`${category === 'Matematica' ? 'bg-blue-500' : category === 'Ciencia y Tec.' ? 'bg-green-600' : category === 'Comunicacion' ? 'bg-red-500' : category === 'Ciencias S.'  ? 'bg-purple-500' : category === 'Desarrollo P.' ? 'bg-orange-500' : category === 'Todas' ? 'bg-black' : ''} px-5 py-2 text-white text-xl font-semibold rounded-xl `}>
            {category}
          </button>
        ))}

      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 mt-5 flex-wrap gap-5' >
        {articles.map((card) => (
          // w-[500px] h-[300px]
            <div className='h-[200px] lg:h-[300px] group overflow-hidden relative' key={card.id}>
                <div className='w-full h-[100%] relative' >
                <Image alt='' src={card.img} fill objectFit='cover'/>
                </div>
                <div className='absolute flex p-5 flex-col justify-between z-2 bg-white w-full transition-all duration-500 h-full mt-[100%]  group-hover:mt-0 top-0'>
                 <div className=''>
                 <h3 className='text-3xl '>{card.category}</h3>
                  <h4>{card.grado}</h4>
                 </div>
                  
                  <div className='flex flex-col gap-2'>
                  <div className='flex items-center -mt-10 gap-5'>
                    <Image src={"/PAGES.svg"}  width={30} height={20}/>
                    <h2>paginas: 115</h2>
                  </div>
                    <div className='flex  gap-2 '>
                      <Link className='bg-blue-500 text-lg text-white font-semibold px-5 py-2 rounded-2xl' href={"/"}>Ver </Link>
                      <Link className='bg-black  text-lg text-white font-semibold  px-5 py-2 rounded-2xl ' href={""}>Reservar</Link>
                    </div>
                  </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default page