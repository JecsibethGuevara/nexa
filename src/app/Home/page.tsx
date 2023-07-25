import { Navigation } from '@/components/global/Navigation';
import { CreatePost } from '@/components/Home/CreatePost';
import { Posts } from '@/components/Home/Posts';
import React from 'react'

export const page = () => {
  return (
    <div>
        <Navigation/>
        <CreatePost/>
        <Posts/>
    </div>
  )
}
export default page;