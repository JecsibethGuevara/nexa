import { JSX } from "react"

export const Container = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    
  return (
    <div className=" min-h-screen text-light z-50 relative border-4 border-black">
        {children}
    </div>
  )
}
