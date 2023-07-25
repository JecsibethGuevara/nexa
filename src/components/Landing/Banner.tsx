'use client'
import Image from 'next/image'
import Bubble from "../Decor/Bubble"
import BannerImg from '../../../public/images/Launching.svg'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export const Banner = () => {
    const go =(route: any) =>{
        const router = useRouter()
        router.push(route)
    }
    
  return (
    <div className="flex  text-light  items-center p-24">
        <div className="infoBanner w-3/5 ">
            <h1 className="text-center text-6xl mr-10 px-20 ">Banner Information that i haven't fully thought of</h1>
            <p className="py-10 px-32 text-center ">small description of a product i also have not really thougth about not even a litle bit pls bear w me</p>
            <div className="flex justify-center ">
                <Link href="/register" className="p-3 px-6 mx-5 bg-accent rounded-full"> Whatever!</Link>
                <Link href="/login"   className="p-3 px-6 mx-5 bg-light rounded-full text-background"> Whateverr!</Link>
            </div>
        </div>
        <div className="imgSide  w-2/5">
            <div className="">
                <div className=" h-screen top-0 bg-accent w-1/4 absolute flex flex-col justify-center align-center ">                
                    <Bubble position="absolute top-40 left-[-10%]"/>
                    <Bubble position="absolute top-25 left-[60%]"/>
                    <Bubble position="absolute bottom-2 rigth-[10%]"/>
                          
                </div>
                
                <Image src={BannerImg} alt="My Image" width={700} height={700} className='relative z-40' /> 
            </div>
        </div>
    </div>
  )
}
