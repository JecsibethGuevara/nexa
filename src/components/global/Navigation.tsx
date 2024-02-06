import { Button } from '@/components/global/Button';


export const Navigation = () => {
  return (
    <nav className="flex justify-around items-center min-w-full py-4 border-b-4 border-black z-50 relative ">
        <div className="left flex justify border-1 divide-x">
          <div className="logo pr-2">
              <h3>Logo</h3>
          </div>

          <div className="navigation flex max-w-fit">
              <a href="#" className="menuItem px-5">Home</a>
              <a href="#" className="menuItem px-5">Profile</a>
              <a href="#" className="menuItem px-5">News</a>
              <a href="#" className="menuItem px-5">Account</a>
          </div>
        </div>

        <div className='flex justify-around items-center px-8 '>
          <p className='ml-4 px-8'> login </p>
          <Button/>
        </div>

    </nav>
  )
}
