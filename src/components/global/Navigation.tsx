
export const Navigation = () => {
  return (
    <nav className="flex justify-around min-w-full py-10 text-light z-50 relative">
        <div className="logo">
            <h3>Logo</h3>
        </div>

        <div className="navigation flex justify-around max-w-fit">
            <a href="#" className="menuItem px-5">Home</a>
            <a href="#" className="menuItem px-5">Profile</a>
            <a href="#" className="menuItem px-5">News</a>
            <a href="#" className="menuItem px-5">Account</a>
        </div>

    </nav>
  )
}
