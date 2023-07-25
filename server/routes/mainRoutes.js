import express  from 'express';
import connectDB from '../libs/mongoServer.js'
import Post from '../models/post.js'
const router = express.Router(); 
 
router.get('/', (req, res) => { 
  res.send({ message: 'Hello from Express!' });
  console.log('hi')
});

router.post('/posts', async (req, res) => {

    console.log(req.body) 
   try{
    await connectDB()
    const post = new Post({
      fullname: req.body.fullname,
      postText : req.body.postText,
      timestamp : new Date()
    })

    const savedPost = post.save()

   }catch(error){
    console.log(error )
   }

    res.send({ message: 'Hello from Express Posts!' })
}); 

router.get('/getPosts', async (req,res) =>{
let posts
  try{
    await connectDB()
     posts = await Post.find({})
    console.log(posts)
  }catch(error){
    console.log(error)
  }
  res.send({posts: posts})
})
 
export default router