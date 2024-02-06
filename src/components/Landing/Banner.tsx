'use client'
import Image from 'next/image'
import Bubble from "../Decor/Bubble"
import BannerImg from '../../../public/images/Launching.svg'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Container } from '../global/Container'

export const Banner = () => {
    const go =(route: any) =>{
        const router = useRouter()
        router.push(route)
    }
    
  return (
    <div className=''>
        <h1>hi</h1>
    </div>
  )
}


