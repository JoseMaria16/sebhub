"use client"
import Image from "next/image";
import Link from "next/link";
import { BsArrowDownShort, BsArrowBarUp } from 'react-icons/bs'

export default function Home() {
  return (
   <div>
     <main className="flex justify-center flex-col items-center">
      <h1 className=" text-[40px] leading-10  w-full px-5 md:text-7xl xl:text-8xl font-semibold text-center  text-[#303ebc] mx-auto lg:w-[18ch] mt-12">La Alma mater de la educacíon, en la web</h1>
      <p className="lg:text-2xl text-xl px-5 font-medium w-full  lg:w-[45ch] py-5 mx-auto text-center">El colegio Sebastián Barranca, es el mejor colegio de Camaná. Ahora con su plataforma potenciara la calidad de educacíon</p>
      <Link className='bg-[#303ebc] flex items-center justify-between uppercase px-5  py-2 text-lg text-white rounded-lg' href={""}>Sobre nosotros
      <BsArrowDownShort size={30}/>
      </Link>
      <div className="w-full 2xl:hidden mx-auto h-[400px] relative">
      <Image alt="" src={"/home-hero.png"} fill objectFit="cover" className=" mt-10 flex mx-auto"/>
      </div>
      <Image alt="" src={"/home-hero.png"} width={1200} height={500} className=" mt-10  hidden 2xl:flex mx-auto"/>
    </main>
    <section className="lg:px-16 xl:px-52 xl:flex-row flex-col  px-5 justify-center pt-20">
      <div className="flex flex-col justify-center items-center">
        <h3 className=" text-5xl lg:text-7xl font-bold  text-primary text-center">Sobre el</h3>
        <p className="lg:text-xl text-base md:text-lg font-medium text-center w-full md:px-10 lg:w-[70ch] mx-auto py-5">En [Nombre del Colegio], desde [año de fundación], nos dedicamos a inspirar y educar a las mentes jóvenes. Nuestra misión es proporcionar educación de calidad, fomentar la curiosidad y cultivar ciudadanos del mundo comprometidos. Guiados por valores de integridad y empatía, creamos un ambiente donde la excelencia y la diversidad se celebran. En [Nombre del Colegio], cada estudiante encuentra apoyo para alcanzar su máximo potencial y contribuir significativamente a la sociedad.</p>
        <div className="flex gap-3">
        <Link href={""} className="bg-primario px-6 py-3 text-xl text-white font-semibold rounded-lg mx-auto">Ingresar</Link>
        <Link href={""} className="bg-primario px-6 py-3 text-xl text-white font-semibold rounded-lg mx-auto">Ingresar</Link>
      </div>
      </div>
      
    </section>
    <section className="lg:max-w-[1100px] px-5 md:px-20 relative mt-40  md:mt-20  mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div  className="bg-gray-400 w-full h-[250px] relative">
          <Image src={"/cole1.jpg"} objectFit="cover" fill />
        </div>
        <div  className="bg-gray-400 w-full h-[250px] relative">
          <Image src={"/cole.jpg"} objectFit="cover" fill />
        </div>
        <div  className="bg-gray-400 w-full h-[250px] relative">
        <Image src={"/cole2.jpg"} objectFit="cover" fill />

        </div>
      </div>
      <Image src={"/miradas.png"}  width={200} 
      height={300} className="absolute -top-32 right-[5%]"/>
    </section>
    <footer className="flex py-10 justify-center items-center">
        <h3 className="text-xl lg:text-2xl">Creado por JoseMaria Jauregui</h3>
        <div></div>
    </footer>
    </div>
  )
}
// En [Nombre del Colegio], desde [año de fundación], nos dedicamos a inspirar y educar a las mentes jóvenes. Nuestra misión es proporcionar educación de calidad, fomentar la curiosidad y cultivar ciudadanos del mundo comprometidos. Guiados por valores de integridad y empatía, creamos un ambiente donde la excelencia y la diversidad se celebran. En [Nombre del Colegio], cada estudiante encuentra apoyo para alcanzar su máximo potencial y contribuir significativamente a la sociedad.