
import React, { useEffect, useState } from 'react'
import { Post } from './Post';

interface PostData {
  id: number;
  title: string;
  body: string;
}

export const Posts = async () => {

  const getPosts = async () => {
    try {
      const response = await fetch('http://localhost:3001/getPosts');
      const data = await response.json();
      console.log(typeof(data));
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  let posts = [] 
  posts = await getPosts()
  posts = posts.posts

  return (
    <div>
      {posts.map((post: { id: React.Key | null | undefined; fullname: any; postText: any; }) => (
        <Post key={post.id} fullname={post.fullname} postText={post.postText} />
      ))}
    </div>
  )
}
