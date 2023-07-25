'use client'
export const Post = (props : {
  fullname: {fullname : any}
}) => {

  console.log(props, 'PROPS')
  return (
    <div>
        <h1>{props.fullname}</h1>
        <p>{props.postText}</p>
        <div className="flex">
            <p>Likes </p>
            <p>Coments  </p>
        </div>
    </div>
  )
}
