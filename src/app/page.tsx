"use client"
import Image from 'next/image'
import styles from './page.module.css'
import {useSession}  from "next-auth/react"
import { Navigation } from '@/components/global/Navigation'
import { Banner } from '@/components/Landing/Banner'


export default function Home() {
  const {data: session, status} = useSession()
  console.log(session, status)
  return (
    <div >
      <Navigation/> 
      <Banner />
    </div>
  )
}
