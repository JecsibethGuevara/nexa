
export  const Bubble = (position: any) => {
  console.log(position)
  return (
    <div>
      <div className={`w-20 h-20  border-l border-b glow  drop-shadow-2xl border-white rounded-full bg-gradient-to-br ${position.position}`} ></div>
    </div>
  )
}

export default Bubble